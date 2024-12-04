import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';


import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, JaTenhoContaText, LoginText, Row, Wrapper, TermosDeUso } from './styles';

const Singin = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            if(data.length && data[0].id){
                navigate('/feed')
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            console.log('errors', errors);
        }
    };

    const onLogin = () => {
        navigate('/login')
    }

    return(<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="name" control={control} />
                        {errors.name && <span>Nome Completo é obrigatório</span>}
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                        {errors.name && <span>E-mail é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                        {errors.name && <span>Senha é obrigatório</span>}
                        <Button title="Criar minha conta grátis" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <TermosDeUso>Ao clicar em "Criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermosDeUso>
                    </Row>
                    <Row>
                        <JaTenhoContaText>Já tenho conta.</JaTenhoContaText>
                        <LoginText onClick={ onLogin }>Fazer Login</LoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    
    </>)
}

export { Singin }