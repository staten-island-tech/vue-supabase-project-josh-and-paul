import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://hxupzwsylyvavajgqzva.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4dXB6d3N5bHl2YXZhamdxenZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMzUwMjIsImV4cCI6MjAyNzgxMTAyMn0.gE2pToLDY2tHj1Ek7YSUBfrVGlMkWRubigv3fptdGos')