import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async incrementClicks() {
    const { error } = await this.supabase.rpc('increment_clicks');
    if (error) {
      console.error('Error incrementing clicks:', error);
    }
  }

  async getClicks(): Promise<number> {
    const { data, error } = await this.supabase.rpc('get_clicks');
    if (error) {
      console.error('Error getting clicks:', error);
      return 0;
    }
    return data;
  }
}
