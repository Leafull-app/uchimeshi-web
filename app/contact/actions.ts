'use server';

type FormState = { success: boolean; error: string };

export async function sendContactForm(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = formData.get('name')?.toString().trim() ?? '';
  const email = formData.get('email')?.toString().trim() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';

  if (!name || !email || !message) {
    return { success: false, error: 'すべての項目を入力してください。' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: '有効なメールアドレスを入力してください。' };
  }

  if (message.length > 2000) {
    return { success: false, error: 'お問い合わせ内容は2000文字以内で入力してください。' };
  }

  // TODO: メール送信を実装する
  // nodemailer や Resend などのメールサービスを使用してください
  // 例: await sendEmail({ to: 'contact@leafull.life', name, email, message })
  console.log('Contact form submission:', { name, email, message });

  return { success: true, error: '' };
}
