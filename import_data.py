import requests
from supabase import create_client

# Step 1: Fill in your Supabase credentials
supabase_url = 'https://pbowqzujvauvtwgvolox.supabase.co'      # <-- Use your actual Supabase URL
supabase_key = 'YOUR_ANON_PUBLIC_KEY'                          # <-- Paste your Supabase anon public key here
supabase = create_client(supabase_url, supabase_key)

# Step 2: VTUPulse API endpoint for syllabus (change to question API if needed)
api_url = 'https://vtupulse.com/api/syllabus'                  # <-- Replace with correct VTUPulse API endpoint

# Step 3: Fetch data from VTUPulse
response = requests.get(api_url)
if response.status_code != 200:
    print(f"Error fetching data: {response.status_code}")
    exit()

data = response.json()

# Step 4: Insert each record into your 'syllabus' table in Supabase
for entry in data['results']:   # Change 'results' if API structure is different
    supabase.table('syllabus').insert({
        'subject_code': entry['sub_code'],   # Change field names if your API uses different names
        'subject': entry['sub_name'],
        'semester': entry['semester']
    }).execute()

print("Import from VTUPulse API complete!")
