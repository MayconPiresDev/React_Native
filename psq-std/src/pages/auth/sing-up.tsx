import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SingUp() {
  const navigate = useNavigate()

  const singUpForm = z.object({
    courseName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email: z.string().email(),
  })

  type SignIform = z.infer<typeof singUpForm>

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignIform>()

  async function handleSingIn(data: SignIform) {
    try {
      console.table(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Cadastrado com sucesso', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sing-in'),
        },
      })
    } catch {
      toast.error('Algo deu errado, tente novamente')
    }
  }

  return (
    <main>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant={'ghost'} asChild className="absolute right-8 top-8">
          <Link to="/sing-in">Fazer login</Link>
        </Button>
        <div className="flex w-[340px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crie sua conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um estudante e comece suas aulas!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSingIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="courseName">Categoria do curso</Label>
              <Input id="courseName" type="text" {...register('courseName')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Responsável pelo curso</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar Cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a className="underline underline-offset-4" href="">
                termos de serviço
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-4" href="">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}
