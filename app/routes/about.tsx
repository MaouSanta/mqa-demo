import {
    Anchor,
    AspectRatio,
    Button,
    Center,
    Code,
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

import {Carousel} from "@mantine/carousel";

import image_overview from '~/assets/Fig2-overview_00.png';
import {Link} from "@remix-run/react";

const images = [
    'app/assets/Fig3_5.png',
    'app/assets/Fig4_1.jpg',
    'app/assets/Fig4_2.jpg',
];

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
    return (
        <ScrollArea h={'100vh'}>
            <Center>
                <Stack align={'center'} justify={'flex-start'} style={{width: '1300px'}}>
                    <Title className={'about-title'} size={'3rem'} pt={'48px'} style={{width: '1300px'}}>
                        An Interactive Multi-modal Query Answering System
                        with Retrieval-Augmented Large Language Models
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
                    <Text className={'about-text'} ta="center" size={'20px'} fw={400} lh={'30px'} my={'-16px'}>
                        <sup>*</sup>Zhejiang University, Hangzhou, China, <sup>#</sup>Hangzhou Dianzi University,
                        Hangzhou, China
                    </Text>
                    <Group align={'center'} justify={'center'} pt={'12px'} pb={'60px'} gap="xs">
                        <Link to={'https://github.com/ZJU-DAILY/MQA'}>
                            <Button variant="filled" color="rgb(74, 74, 74)" radius="xl" size={'md'}
                                    leftSection={<FaFilePdf/>}>Paper</Button>
                        </Link>
                        <Link to={'https://github.com/ZJU-DAILY/MQA'}>
                            <Button variant="filled" color="rgb(74, 74, 74)" radius="xl" size={'md'}
                                    leftSection={<FaGithub/>}>Code</Button>
                        </Link>
                        <Link to={'https://web.mit.edu/phillipi/Public/states_and_transformations/index.html'}>
                            <Button variant="filled" color="rgb(74, 74, 74)" radius="xl" size={'md'}
                                    leftSection={<FaDatabase/>}
                            >Dataset</Button>
                        </Link>
                    </Group>
                    <AspectRatio ratio={16 / 9} miw={'960'}>
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/7MR_FPoObvc?si=_F99iPAGN9wLwTKr"
                                title="YouTube video player" frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </AspectRatio>
                    <Divider my="xl" w={'100%'}/>
                    <Container className={'wrap'}>
                        <Title className={'about-title'}>Abstract</Title>
                        <Text className={'about-text'} ta="justify" size="lg">
                            MQA: Powering your multi-modal world with advanced retrieval and generation technology.
                            Fusing intricate embedding, vector weighting, and sophisticated indexing, MQA provides
                            robust support for complex queries. With a user-first design, our system streamlines data
                            processing, builds intelligent indexes, and delivers accurate answers. Venture into the
                            future of multi-modal query answering with MQA – where every search finds its meaning.
                        </Text>
                    </Container>
                    <Divider my="xl" w={'100%'}/>
                    <Container className="wrap">
                        <Title className={'about-title'}>Architecture Overview</Title>
                        <Text className={'about-text'} ta="justify" size="lg">
                            <Image src={image_overview}
                                   w={'575px'}
                                   h={'auto'}
                                   style={{
                                       margin: "0 auto",
                                       display: "block",
                                       float: "right", // make image float at left
                                       clear: "both", // prevent text hit the image
                                       padding: "10px 0 0 10px"
                                   }}
                            />
                            Explore the MQA architecture: a streamlined, user-friendly system designed for sophisticated
                            multi-modal
                            information retrieval. With a seamless front-to-backend workflow, MQA comprises: <br/>
                            <Text className={'about-text'} fw={700} span inherit>Frontend Interface</Text>: Crafted for
                            an intuitive
                            user experience, configure retrieval
                            settings and engage in multi-modal dialogue interactions effortlessly.<br/>
                            <Text className={'about-text'} fw={700} span inherit>Data Preprocessing</Text>: Import
                            multi-modal data
                            into the system, stored as a structured
                            object collection, primed for effective querying.<br/>
                            <Text className={'about-text'} fw={700} span inherit>Vector Representation</Text>:
                            Harnessing the power
                            of vectors to encapsulate the essence of
                            multi-modal data for precise matching.<br/>
                            <Text className={'about-text'} fw={700} span inherit>Index Construction</Text>: An
                            innovative approach to
                            indexing that facilitates rapid,
                            accurate retrieval across varied data modalities.<br/>
                            <Text className={'about-text'} fw={700} span inherit>Query Execution</Text>: Robust
                            execution of
                            multi-modal queries, utilizing an intelligent
                            navigation graph for real-time, relevant results.<br/>
                            <Text className={'about-text'} fw={700} span inherit>Answer Generation</Text>: Employs the
                            latest Large
                            Language Models (LLMs) to synthesize
                            contextually rich, natural responses to multi-modal queries, enhancing user interaction with
                            multi-modal context.
                        </Text>
                    </Container>
                    <Divider my="xl" w={'100%'}/>
                    <Container className="wrap">
                        <Title className={'about-title'}>Results</Title>
                        <Carousel slideGap="xl" loop w={'700px'} withIndicators>
                            {images.map((url) => (
                                <Carousel.Slide key={url}>
                                    <Image src={url}/>
                                </Carousel.Slide>
                            ))}
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