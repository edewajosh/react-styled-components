import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Image, Logo, Nav, StyleHeader } from "./styles/Header.styled";

export default function Header(){
    return (
        <StyleHeader bg="red">
            <Container>
               <Nav>
                   <Logo src='./images/logo.svg' alt='' />
                   <Button>Try it free</Button>
               </Nav>
               <Flex>
                   <div>
                       <h1>Build The Community Your Fans Will Love</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus exercitationem 
                           libero illo nam odio eaque corporis consequuntur? Soluta facilis nisi, 
                           deleniti tenetur corrupti, 
                           architecto assumenda suscipit mollitia sequi dolorem ratione.</p>
                        <Button bg='#ff0099' color='#fff'>
                            Get Started For Free
                        </Button>
                   </div>
                   <Image src='./images/illustration-mockups.svg' alt=''/>
               </Flex>
            </Container>
        </StyleHeader>
    )
}