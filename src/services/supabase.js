
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://eqaloutxncinuhlhlkng.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxYWxvdXR4bmNpbnVobGhsa25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwODExMDcsImV4cCI6MjAyMzY1NzEwN30.FQduPpu9YrxnIqqoF9NyOtCeM88OK8jeW4z2vJO3o8Q'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;