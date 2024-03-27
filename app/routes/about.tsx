import {
    Anchor,
    AspectRatio,
    Button,
    Center, Code,
    Container,
    Divider,
    Group,
    Image,
    ScrollArea,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import '~/styles/about.css'
import {FaDatabase, FaFilePdf, FaGithub} from "react-icons/fa";

import {BsBrowserChrome} from "react-icons/bs";
import {Carousel} from "@mantine/carousel";

import image_overview from '~/assets/Fig2-overview_00.png';
import image_1 from '~/assets/Fig3_5.png';
import image_2 from '~/assets/Fig4-exam1_00.png';
import image_3 from '~/assets/Fig4-exam2_00.png';
import {Link, useNavigate} from "@remix-run/react";

const bibtexCode = `@manual{MQA,
    author    = {Mengzhao Wang and
        Haotian Wu and
        Xiangyu Ke and
        Yunjun Gao and
        Xiaoliang Xu and
        Lu Chen},
    title     = {An Interactive Multi-modal Query Answering System with Retrieval-Augmented Large Language Models},
    url       = {xxx},
    year      = {2024}
}

@article{MUST_ICDE2024,
    title={Must: An effective and scalable framework for multimodal search of target modality},
    author={Mengzhao Wang and Xiangyu Ke and Xiaoliang Xu and Lu Chen and Yunjun Gao and Pinpin Huang and Runkai Zhu},
    journal={arXiv preprint arXiv:2312.06397},
    year={2023}
}`


export default function About() {
    const navigate = useNavigate();
    return (
        <ScrollArea h={'100vh'}>
            <Center>
                <Stack align={'center'} justify={'flex-start'} maw={1000}>
                    <Container py={'48px'} px={'24px'}>
                        <Title className={'about-title'} size={'3rem'}>
                            An Interactive Multi-modal Query Answering System with Retrieval-Augmented Large Language
                            Models
                        </Title>
                        <Text className={'about-text'} ta="center" size={'20px'} fw={400} lh={'30px'}>
                            <Anchor className={'about-anchor'} href="https://mantine.dev/" target="_blank">
                                Mengzhao Wang
                            </Anchor><sup>*</sup>,
                            <Anchor className={'about-anchor'} href="https://mantine.dev/" target="_blank">
                                Haotian Wu
                            </Anchor><sup>*</sup>,
                            <Anchor className={'about-anchor'} href="https://mantine.dev/" target="_blank">
                                Xiangyu Ke
                            </Anchor><sup>*</sup>,
                            <Anchor className={'about-anchor'} href="https://mantine.dev/" target="_blank">
                                Yunjun Gao
                            </Anchor><sup>*</sup>,
                            <Anchor className={'about-anchor'} href="https://mantine.dev/" target="_blank">
                                Xiaoliang Xu
                            </Anchor><sup>#</sup>,
                            <Anchor className={'about-anchor'} href="https://mantine.dev/" target="_blank">
                                Lu Chen
                            </Anchor><sup>*</sup>
                        </Text>
                        <Text className={'about-text'} ta="center" size={'20px'} fw={400} lh={'30px'}>
                            <sup>*</sup>Zhejiang University, Hangzhou, China, <sup>#</sup>Hangzhou Dianzi University, Hangzhou, China
                        </Text>
                        <Group align={'center'} justify={'center'} py={'12px'} gap="xs">
                            <Button variant="filled" color="rgb(74, 74, 74)" radius="xl" size={'md'}
                                    leftSection={<FaFilePdf/>}>Paper</Button>
                            <Button variant="filled" color="rgb(74, 74, 74)" radius="xl" size={'md'}
                                    leftSection={<FaGithub/>}>Code</Button>
                            <Button variant="filled" color="rgb(74, 74, 74)" radius="xl" size={'md'}
                                    leftSection={<BsBrowserChrome/>}
                                    onClick={() => navigate('/dashboard/0')}
                            >Demo</Button>
                            <Link to={'https://web.mit.edu/phillipi/Public/states_and_transformations/index.html'}>
                                <Button variant="filled" color="rgb(74, 74, 74)" radius="xl" size={'md'}
                                        leftSection={<FaDatabase/>}
                                >Dataset</Button>
                            </Link>
                        </Group>
                    </Container>
                    <AspectRatio ratio={16 / 9} miw={'960'}>
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/T4_Friv17uU?si=dTHq1EN5cjdt_edB"
                                title="YouTube video player" frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </AspectRatio>
                    <Divider my="xl" w={'100%'}/>
                    <Container className={'wrap'}>
                        <Title className={'about-title'} >Abstract</Title>
                        <Text className={'about-text'} ta="justify" size="lg">
                            Retrieval-augmented Large Language Models (LLMs) have reshaped traditional query-answering
                            systems,
                            offering an unrivaled user experience. Nonetheless, commonplace retrieval techniques engage
                            solely
                            single-modality entities, proving inadequate for multi-modal query-answering contexts. In this
                            paper, we demonstrate an interactive Multi-modal Query Answering (MQA) system, powered by LLMs
                            and
                            efficient, accurate multi-modal retrieval. Comprising five primary components - Data
                            Preprocessing,
                            Vector Representation, Index Construction, Query Execution, Answer Generation - MQA possesses a
                            modular configuration. A dedicated coordinator supervises the operations of each respective
                            element,
                            guaranteeing an uninterrupted data flow from input to answer generation. Notably, MQA determines
                            modality importance with contrastive learning, accurately measuring multi-modal information
                            similarity. Efficiency in retrieval is achieved using an advanced navigation graph index,
                            optimized
                            by computational pruning. Our system adopts a pluggable processing framework, allowing seamless
                            integration of embedding models, graph index, and LLMs, thus providing users a diversified
                            choice
                            for gaining insights from their multi-modal knowledge base.
                        </Text>
                    </Container>
                    <Divider my="xl" w={'100%'}/>
                    <Container className="wrap">
                        <Title className={'about-title'}>Architecture Overview</Title>
                        <Text className={'about-text'} ta="justify" size="lg">
                            <Image src={image_overview}
                                   w={525}
                                   h={'auto'}
                                   style={{
                                       margin: "0 auto",
                                       display: "block",
                                       float: "right", // make image float at left
                                       clear: "both", // prevent text hit the image
                                       padding: "10px 0 0 10px"
                                   }}
                            />
                            <Text className={'about-text'} fw={700}>Data preprocessing.</Text> The data preprocessing component integrates a
                            multi-modal knowledge base into MQA, which encompasses texts, images, and more.
                            <Text className={'about-text'} fw={700}>Vector representation.</Text> The vector representation module transforms
                            multi-modal objects into vectorized entities, enabling standardized mathematical expression of
                            content.
                            <Text className={'about-text'} fw={700}>Index construction.</Text> The index construction component builds a
                            unified navigation graph index from objects&lsquo; multi-vector representation, with modality weights
                            from the vector representation
                            component being utilized.
                            <Text className={'about-text'} fw={700}>Query execution.</Text> The query execution component efficiently
                            navigates to pertinent contexts with user queries via multi-modal
                            vector search methods.
                            <Text className={'about-text'} fw={700}>Answer generation. </Text>The answer generation component skillfully
                            crafts responses from retrieved results and the context of the user
                            query.
                        </Text>
                    </Container>
                    <Divider my="xl" w={'100%'}/>
                    <Container className="wrap">
                        <Title className={'about-title'}>Results</Title>
                        <Carousel slideSize="70%" slideGap="xl" loop>
                            <Carousel.Slide><Image src={image_1}/></Carousel.Slide>
                            <Carousel.Slide><Image src={image_2}/></Carousel.Slide>
                            <Carousel.Slide><Image src={image_3}/></Carousel.Slide>
                        </Carousel>
                    </Container>
                    <Divider my="xl" w={'100%'}/>
                    <Container className="wrap">
                        <Title className={'about-title'} ta={'left'}>BibTeX</Title>
                        <Code block mb={50}>
                            {bibtexCode}
                        </Code>
                    </Container>
                </Stack>
            </Center>
        </ScrollArea>
    );
}