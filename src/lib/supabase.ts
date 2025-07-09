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
  view_token?: string
}

// 짧은 ID 생성 함수 (8자리 영숫자)
function generateShortId(): string {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'; // 혼동되는 문자 제외 (0,O,1,I,l)
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// 상담 접수 함수
export async function submitConsultation(data: Omit<ConsultationRequest, 'id' | 'created_at' | 'status' | 'view_token'>) {
  const viewToken = generateShortId();
  
  const { data: result, error } = await supabase
    .from('consultation_requests')
    .insert([
      {
        ...data,
        status: 'pending',
        view_token: viewToken,
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