/* eslint-disable import/no-anonymous-default-export */
import DesignIllustration from 'images/design-illustration.svg';
import smarthm_short from 'images/logo/logo.png';
import smarthm_full from 'images/logo/smarthm_white_trans.png';

import { ReactComponent as TwitterIcon } from 'images/twitter-icon.svg';
import { ReactComponent as LinkedinIcon } from 'images/linkedin-icon.svg';
import { ReactComponent as GithubIcon } from 'images/github-icon.svg';
export default {
	logo: { smarthm_short, smarthm_full },
	faq: [
		{
			question: 'Are all the templates easily customizable ?',
			answer:
				'Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			question: 'How long do you usually support an standalone template for ?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			question: 'What kind of payment methods do you accept ?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			question: 'Is there a subscribption service to get the latest templates ?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			question: 'Are the templates compatible with the React ?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			question: 'Do you really support Internet Explorer 11 ?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
	],

	testimonials: [
		{
			stars: 5,
			profileImageSrc:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80',
			heading: 'Amazing User Experience',
			quote:
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
			customerName: 'Charlotte Hale',
			customerTitle: 'Director, Delos Inc.',
		},
		{
			stars: 5,
			profileImageSrc:
				'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
			heading: 'Love the Developer Experience and Design Principles !',
			quote:
				'Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			customerName: 'Adam Cuppy',
			customerTitle: 'Founder, EventsNYC',
		},
	],

	hero: {
		heading: 'Sweet and Smart Home',
		description:
			'We offer top-notch home automation solutions that have been designed to operate wirelessly.',
		primaryButtonText: 'Get Started',
		primaryButtonUrl: '#',
		watchVideoButtonText: 'Watch Video',
		watchVideoYoutubeUrl: 'https://www.youtube.com/embed/_GuOjXYl5ew',
		imageSrc: DesignIllustration,
		imageCss: null,
		imageDecoratorBlob: false,
	},

	//Steps for installation and Get Started
	steps: [
		{
			heading: 'Register',
			description: 'Create an account with us using Google or Facebook.',
		},
		{
			heading: 'Download',
			description: 'Browse and Download the template that you like from the marketplace.',
		},
		{
			heading: 'Run',
			description: 'Follow the instructions to setup and customize the template to your needs.',
		},
	],

	team: [
		{
			imageSrc:
				'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80',
			position: 'Founder',
			name: 'Rohit Mohata',
			links: [
				{
					url: 'https://twitter.com',
					icon: TwitterIcon,
				},
				{
					url: 'https://linkedin.com',
					icon: LinkedinIcon,
				},
				{
					url: 'https://github.com',
					icon: GithubIcon,
				},
			],
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80',
			position: 'Founder & CTO',
			name: 'Sujay Alaspure',
			links: [
				{
					url: 'https://twitter.com/alaspuresujay',
					icon: TwitterIcon,
				},
				{
					url: 'https://linkedin.com/alaspuresujay',
					icon: LinkedinIcon,
				},
				{
					url: 'https://github.com/alaspuresujay',
					icon: GithubIcon,
				},
			],
		},
	],

	navlinks: [
		{ slug: '/', name: 'Home' },
		{ slug: '/blog', name: 'Blog' },
		{ slug: '/how-it-works', name: 'How It Works' },
		// { slug: '/about-us', name: 'About Us' },
		{ slug: '/contact-us', name: 'Contact us' },
	],
	footerLink: [
		{ slug: '/', name: 'Home' },
		{ slug: '/blog', name: 'Blog' },
		{ slug: '/how-it-works', name: 'How It Works' },
		{ slug: '/about-us', name: 'About Us' },
		// { slug: '/contact-us', name: 'Contact us' },
	],
};
