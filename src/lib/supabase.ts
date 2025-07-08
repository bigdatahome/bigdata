import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// 상담 접수 데이터 타입 정의
export interface ConsultationRequest {
  id?: string
  name: string
  phone: string
  email: string
  message: string
  created_at?: string
  status?: 'pending' | 'contacted' | 'completed'
}

// 상담 접수 함수
export async function submitConsultation(data: Omit<ConsultationRequest, 'id' | 'created_at' | 'status'>) {
  const { data: result, error } = await supabase
    .from('consultation_requests')
    .insert([
      {
        ...data,
        status: 'pending',
        created_at: new Date().toISOString()
      }
    ])
    .select()

  if (error) {
    console.error('Error submitting consultation:', error)
    throw error
  }

  return result
} 