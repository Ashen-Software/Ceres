import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Box, Image, Icon, LinkBox, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaGithub, FaYoutube } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box
			min-width="100px"
			min-height="100px"
			display="inline-block"
			position="fixed"
			bottom="auto"
			height="533.7607951807229px"
			left="407px"
			right="auto"
			top="265px"
			width="624.3910000000001px"
			background="rgba(7, 1, 11, 0.9)"
			border-radius="10% 10%"
		>
			<Text
				margin="0px 0px 0px 0px"
				color="#fbfbfb"
				position="absolute"
				top="153px"
				bottom="auto"
				height="104.88992537313433px"
				right="76px"
				left="auto"
				width="468.01413432835824px"
				font="italic normal 900 100px/100% sans-serif"
				text-align="center"
				letter-spacing="20px"
				text-shadow="5px 0px 50px #013088"
			>
				CERES
			</Text>
			<Button
				bottom="99px"
				height="87.15324044943821px"
				left="auto"
				position="absolute"
				right="101px"
				top="auto"
				width="418.69813483146066px"
				border-radius="25px"
				background="#150c1b"
				font="normal small-caps 500 27px/100% -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
				hover-background="#2a113b"
			>
				Login with your wallet
			</Button>
		</Box>
		<Image
			src="https://uploads.quarkly.io/6686b40afdcae00021e44d7d/images/image_2024-07-04_094643585.png?v=2024-07-04T14:47:04.224Z"
			display="block"
			border-radius={0}
			letter-spacing="inherit"
			text-shadow="0 0 0 #195790"
			srcSet="https://smartuploads.quarkly.io/6686b40afdcae00021e44d7d/images/image_2024-07-04_094643585.png?v=2024-07-04T14%3A47%3A04.224Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6686b40afdcae00021e44d7d/images/image_2024-07-04_094643585.png?v=2024-07-04T14%3A47%3A04.224Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6686b40afdcae00021e44d7d/images/image_2024-07-04_094643585.png?v=2024-07-04T14%3A47%3A04.224Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6686b40afdcae00021e44d7d/images/image_2024-07-04_094643585.png?v=2024-07-04T14%3A47%3A04.224Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6686b40afdcae00021e44d7d/images/image_2024-07-04_094643585.png?v=2024-07-04T14%3A47%3A04.224Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6686b40afdcae00021e44d7d/images/image_2024-07-04_094643585.png?v=2024-07-04T14%3A47%3A04.224Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6686b40afdcae00021e44d7d/images/image_2024-07-04_094643585.png?v=2024-07-04T14%3A47%3A04.224Z&quality=85&w=3200 3200w"
			sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
		/>
		<Section padding="50px 0 50px 0" quarkly-title="Footer-2" background="rgba(7, 1, 11, 0.95)">
			<Override slot="SectionContent" />
			<Box display="flex" justify-content="space-between" sm-flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="#ffffff"
					sm-margin="0px 0px 15px 0px"
					sm-text-align="center"
				>
					© 2024 Ashen Software. All rights reserved.
				</Text>
				<Box display="grid" grid-template-columns="repeat(5, 1fr)" grid-gap="16px 24px" sm-align-self="center">
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaFacebook}
							size="24px"
							color="#ffffff"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaInstagram}
							size="24px"
							color="#ffffff"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaTwitterSquare}
							size="24px"
							color="#ffffff"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaGithub}
							size="24px"
							color="#ffffff"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaYoutube}
							size="24px"
							color="#ffffff"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
				</Box>
			</Box>
		</Section>
		<Components.EmbedHTML background="#705b82" />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6686b40afdcae00021e44d7b"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});