import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface CreditAssessment {
  id?: string;
  created_at?: string;
  beneficiary_id: string;
  age_bucket: string;
  location_type: string;
  kyc_status: number;
  on_time_payment_rate: number;
  avg_days_past_due: number;
  num_loans_past_24m: number;
  default_flag_ever: number;
  avg_credit_utilization: number;
  utilization_variability: number;
  electricity_usage_kwh: number;
  recharge_frequency_per_month: number;
  avg_recharge_amount: number;
  bills_on_time_ratio: number;
  payment_channel_diversity: number;
  income_proxy_index: number;
  data_completeness_score: number;
  risk_assessment: string;
  confidence_score: number;
  risk_band: string;
}

export async function saveCreditAssessment(assessment: CreditAssessment) {
  const { data, error } = await supabase
    .from('credit_assessments')
    .insert([assessment])
    .select()
    .maybeSingle();

  if (error) {
    console.error('Error saving assessment:', error);
    throw error;
  }

  return data;
}

export async function getCreditAssessments(limit = 100) {
  const { data, error } = await supabase
    .from('credit_assessments')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching assessments:', error);
    throw error;
  }

  return data;
}
