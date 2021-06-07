import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { HomepageProps } from "../../pages";
import TipsChallenge from "./TipsChallenge";
import TipsContent from "./TipsContent";
import TipsTitle from "./TipsTitle";

export default function ContentTips({ homepageTips }: HomepageProps) {
    return (
        <>
            <Flex>
                <Box
                    maxWidth="1160px"
                    mx="auto"
                    mb="10"
                    px={["5", "3"]}
                    my={["8", "30"]}
                >
                    <Flex
                        my={["50", "100"]}
                        w="100%"
                        h={["163px", "250px", "350px", "535px"]}
                        bgImage="url('/goals.jpg')"
                        bgPosition={["100% 20%", "100% 20%", "100% 10%"]}
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        boxShadow="1px 2px 2px rgba(0, 0, 0, 0.5)"
                    />
                    <TipsTitle>Entenda o seu objetivo 🎯</TipsTitle>
                    <TipsContent>
                        Muitas pessoas desejam aprender inglês para poder se comunicar com pessoas ao redor do mundo. Mas existem formas variadas de adquirir a compreensão desse idioma, de acordo com seus objetivos.
                        
                        As línguas são compostas por quatro habilidades: a fala, a escrita, a leitura e a audição. Em geral, os cursos de idiomas investem em metodologias que trabalham todas essas habilidades ao mesmo tempo, abrangendo um pouco de cada uma durante as aulas.

                        Porém, se você tem uma meta específica — leitura e escrita, já que precisa fazer uma prova ou concurso, por exemplo —, vale a pena procurar por aulas direcionadas para um propósito. Elas  serão mais objetivas e práticas, te ajudando a ganhar tempo e chegar exatamente onde você quer.

                        O inglês instrumental, por exemplo, é uma técnica de ensino pensada para alunos que precisam lidar com leitura de livros e artigos em inglês. Caso seu objetivo seja uma viagem, é possível fazer aulas que foquem em conversação, para se preparar para situações específicas, como passar pelo aeroporto, ir a um restaurante, fazer check-in no hotel, entre outros.
                </TipsContent>
                <TipsChallenge />
                </Box>
            </Flex>
            <Flex>
                <Box
                    maxWidth="1160px"
                    mx="auto"
                    mb="10"
                    px={["5", "3"]}
                    my={["8", "30"]}
                >
                    <Flex
                        my={["50", "100"]}
                        w="100%"
                        h={["163px", "250px", "350px", "535px"]}
                        bgImage="url('/methodology.jpg')"
                        bgPosition={["100% 20%", "100% 20%", "100% 10%"]}
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        boxShadow="1px 2px 2px rgba(0, 0, 0, 0.5)"
                    />
                    <TipsTitle>Busque conhecer a metodologia 📚</TipsTitle>
                    <TipsContent>
                    É importante lembrar que estudar em uma escola de idiomas é um investimento tanto de tempo quanto de dinheiro. Então, é preciso avaliar bem cada escola antes de tomar sua decisão.

                    Desconfie de escolas que apresentam slogans que garantem o aprendizado em tempo recorde. Como dissemos, leva algum tempo para aprender uma língua nova. Se o estabelecimento prometer que em três meses você irá do iniciante ao fluente, talvez essa não seja a melhor escola de inglês para você, porque eles não estão sendo sinceros.

                    Visite as escolas que você mais gosta e pergunte se pode assistir uma aula gratuita para avaliar os professores. Assim, será possível ver quantos alunos tem por classe, quais os materiais e método de ensino utilizado. Também poderá ver a didática do professor e outros elementos que serão essenciais na hora do seu aprendizado.
                    </TipsContent>
                <TipsChallenge />
                </Box>
            </Flex>
        </>
    )
}