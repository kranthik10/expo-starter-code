# Supabase Project Setup Instructions

## Creating a Supabase Project  
1. Go to [Supabase](https://supabase.io/) and sign in or create an account.  
2. Click on **New Project**.  
3. Fill in the project name, choose a password, and select the region.  
4. Click on **Create Project**.

## Database Schema  
### 1. Create Tables  
- Navigate to the **Table Editor** in your Supabase project.  
- Create the following tables:
  - **users**  
    - id: UUID (Primary Key)  
    - email: Text  
    - password: Text  
    - created_at: Timestamp  
  
  - **posts**  
    - id: UUID (Primary Key)  
    - user_id: UUID (Foreign Key references users.id)  
    - content: Text  
    - created_at: Timestamp

### 2. Add RLS Policies  
- Navigate to the **Authentication** section.  
- Enable **Row Level Security** (RLS) for the tables you want to protect.

#### Example RLS Policies for Posts Table  
1. Go to the **Policies** tab in the **posts** table.  
2. Create the following policies:
   - **Insert Policy**:  
     - **Expression**: `auth.uid() = user_id`  
   - **Select Policy**:  
     - **Expression**: `auth.uid() = user_id`

## Configuration Steps  
1. In your project settings, under the **API** section, note your `URL` and `anon` key.  
2. Install Supabase client in your project:
   ```bash  
   npm install @supabase/supabase-js  
   ```  
3. Initialize Supabase in your application:
   ```javascript  
   import { createClient } from '@supabase/supabase-js';  
   const supabaseUrl = 'YOUR_SUPABASE_URL';  
   const supabaseAnonKey = 'YOUR_ANON_KEY';  
   const supabase = createClient(supabaseUrl, supabaseAnonKey);  
   ```  

## Conclusion  
You have successfully set up a Supabase project with a basic database schema and RLS policies. You can now start building your application using these configurations!