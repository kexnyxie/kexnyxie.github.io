import json
import urllib.request

USERNAME = "kexnyxie"
URL = f"https://api.github.com/users/{USERNAME}/repos"

def fetch_github_stats():
    try:
        req = urllib.request.Request(URL, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            repos = json.loads(response.read().decode('utf-8'))
            
            total_repos = len(repos)
            languages = {}
            
            for repo in repos:
                lang = repo.get('language')
                if lang:
                    languages[lang] = languages.get(lang, 0) + 1
                    
            stats = {
                "username": USERNAME,
                "public_repos": total_repos,
                "language_breakdown": languages
            }
            
            with open("data/stats.json", "w") as f:
                json.dump(stats, f, indent=2)
                
            print("Successfully updated data/stats.json!")
    except Exception as e:
        print(f"Error fetching stats: {e}")

if __name__ == "__main__":
    fetch_github_stats()