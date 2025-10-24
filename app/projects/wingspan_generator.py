import re
import requests
from bs4 import BeautifulSoup

def parse_height_to_inches(height_str):
    """Converts a height string (e.g., '6\\'8"') to inches."""
    try:
        feet, inches = map(int, re.findall(r'(\d+)', height_str))
        return (feet * 12) + inches
    except (ValueError, TypeError):
        return None

def format_inches_to_height(inches):
    """Converts inches back to a formatted height string."""
    if inches is None:
        return "N/A"
    feet = int(inches // 12)
    remaining_inches = round(inches % 12, 1)
    return f"{feet}'{remaining_inches}\""

def scrape_and_generate_wingspans(league_roster_url):
    """
    Scrapes a Basketball GM roster page, calculates average heights,
    and generates realistic wingspans for each player.
    """
    print("Fetching player data from the provided URL...")
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        response = requests.get(league_roster_url, headers=headers)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Error: Could not retrieve the webpage. Please check the URL and your internet connection.")
        print(f"Details: {e}")
        return

    print("Successfully fetched roster page. Parsing player data...")
    soup = BeautifulSoup(response.content, 'html.parser')

    player_data = []
    # --- CHANGE HIGHLIGHT ---
    # The original selector 'table', class_='table-striped' is no longer valid.
    # The new selector below is more specific to the current site structure.
    player_table = soup.find('div', {'data-bbgm-role': 'player-list'})

    if not player_table:
        print("Error: Could not find the player data table on the page.")
        print("This could be due to a change in the website's HTML structure or an incorrect URL.")
        return

    for row in player_table.find('tbody').find_all('tr'):
        try:
            name = row.find('td', {'data-label': 'Name'}).a.get_text(strip=True)
            height_rating_str = row.find('td', {'data-label': 'Hgt'}).get_text(strip=True)
            # The cosmetic height is inside a 'span' tag within the 'Hgt' cell
            cosmetic_height = row.find('td', {'data-label': 'Hgt'}).span.get_text(strip=True)

            player_data.append({
                'name': name,
                'height_rating': int(height_rating_str),
                'cosmetic_height': cosmetic_height
            })
        except (AttributeError, ValueError):
            # Skip rows that are not player data (e.g., header rows in a weird format)
            continue

    if not player_data:
        print("No players found. The roster might be empty or the page structure has changed.")
        return

    print(f"Successfully parsed data for {len(player_data)} players.")
    print("\n--- Phase 1: Calculating Average Cosmetic Height per Height Rating ---")

    height_rating_groups = {}
    for player in player_data:
        rating = player['height_rating']
        height_in = parse_height_to_inches(player['cosmetic_height'])
        if height_in is None:
            continue

        if rating not in height_rating_groups:
            height_rating_groups[rating] = []
        height_rating_groups[rating].append(height_in)

    average_heights_by_rating = {
        rating: sum(heights) / len(heights)
        for rating, heights in height_rating_groups.items()
    }
    print("Average heights calculated.")

    print("\n--- Phase 2: Generating Player Wingspans ---")

    final_results = []
    for player in player_data:
        player_height_inches = parse_height_to_inches(player['cosmetic_height'])
        if player_height_inches is None:
            player['generated_wingspan_str'] = "N/A"
            player['generated_wingspan_inches'] = None
            final_results.append(player)
            continue

        avg_height_for_rating = average_heights_by_rating.get(player['height_rating'], player_height_inches)
        height_differential = player_height_inches - avg_height_for_rating
        baseline_wingspan = player_height_inches * 1.063
        generated_wingspan_inches = baseline_wingspan + height_differential

        player['generated_wingspan_inches'] = round(generated_wingspan_inches, 2)
        player['generated_wingspan_str'] = format_inches_to_height(generated_wingspan_inches)
        final_results.append(player)

    return final_results


if __name__ == '__main__':
    # --- IMPORTANT: PASTE YOUR LEAGUE'S ROSTER URL HERE ---
    # Example: "https://play.basketball-gm.com/l/1/roster/Your_Team_Name/2025"
    roster_url = "https://play.basketball-gm.com/l/1/roster/ATL_0"

    player_wingspans = scrape_and_generate_wingspans(roster_url)

    if player_wingspans:
        print("\n--- Wingspan Generation Complete ---")
        for player in player_wingspans:
            print(f"\nName: {player['name']}")
            print(f"  > Height Rating: {player['height_rating']}")
            print(f"  > Cosmetic Height: {player['cosmetic_height']}")
            print(f"  > Generated Wingspan: {player['generated_wingspan_str']} ({player['generated_wingspan_inches']}\")")