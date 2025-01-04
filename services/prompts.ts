import { supabase } from '@/lib/supabase/client';
import type { SavedPrompt } from '@/types/database';

export async function savePrompt(title: string, content: any) {
  const { data: user } = await supabase.auth.getUser();
  if (!user.user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('saved_prompts')
    .insert({
      user_id: user.user.id,
      title,
      content
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getSavedPrompts() {
  const { data: user } = await supabase.auth.getUser();
  if (!user.user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('saved_prompts')
    .select('*')
    .eq('user_id', user.user.id)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function deleteSavedPrompt(id: string) {
  const { error } = await supabase
    .from('saved_prompts')
    .delete()
    .eq('id', id);

  if (error) throw error;
} 