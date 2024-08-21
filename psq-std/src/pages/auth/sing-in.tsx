import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SingIn() {
  const signInForm = z.object({
    email: z.string().email(),
  })

  type SignIform = z.infer<typeof signInForm>

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignIform>()

  async function handleSingIn(data: SignIform) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Foi enviado um link de autenticação para o seu e-mail', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSingIn(data),
        },
      })
    } catch {
      toast.error('Algo deu errado, tente novamente')
    }
  }

  return (
    <main>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant={'ghost'} asChild className="absolute right-8 top-8">
          <Link to="/sing-up">Nova conta</Link>
        </Button>
        <div className="flex w-[340px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              acompanhe seus cursos aqui
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSingIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
