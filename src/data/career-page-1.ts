import Alarm from 'icons/solid-mono/Alarm';
import Wallet from 'icons/solid-mono/Wallet';
import Target from 'icons/solid-mono/Target';
import Building from 'icons/solid-mono/Building';
import Employees from 'icons/solid-mono/Employees';
import VideoChat from 'icons/solid-mono/VideoChat';

const facilities = [
  {
    id: 1,
    Icon: Target,
    title: 'Career Growth',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 2,
    Icon: VideoChat,
    title: 'Work From Anywhere',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 3,
    Icon: Wallet,
    title: 'Smart Salary',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 4,
    Icon: Building,
    title: 'Medical Insurance',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 5,
    Icon: Alarm,
    title: 'Flexible Hours',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 6,
    Icon: Employees,
    title: 'Amazing Work Culture',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  }
];

const testimonialList = [
  {
    id: 1,
    name: 'Paul Pantin',
    image: '/img/avatars/te1.jpg',
    designation: 'CEO of eZone Logistics',
    review: `We contracted Elio to build an application to handle our shipment requests when launching in the UK. Our custom application has streamlined operations significantly. The team's ability to understand our unique logistics challenges was impressive. Excellent work from start to finish.`
  },
  {
    id: 2,
    name: 'Nick Maytum',
    image: '/img/avatars/te3.jpg',
    designation: 'CEO Specialist Investments',
    review: `We needed a website that looked modern and impressive given our industry. The solution they developed was outstanding and exactly fit the brief. It perfectly aligns with our brand and provides an intuitive user experience. Highly recommend their professionalism and expertise.`
  },
  {
    id: 3,
    name: 'Lisa Hannington',
    image: '/img/avatars/te5.jpg',
    designation: 'CEO of Optical Gas Imaging',
    review: `It is not easy to find readily availble tech that fits exactly what we need. We asked Elio to build us a custom reporting platform. The application they built was excellent. It was delivered on time, met all our requirements, and has been a game changer. Fantastic team to work with.`
  },
];

const jobList = [
  {
    id: 1,
    company: 'SD',
    time: 'Full Time',
    avatarColor: 'bg-red',
    location: 'San Francisco, US',
    title: 'Senior Graphic Designer',
    badgeColor: 'bg-pale-blue text-blue'
  },
  {
    id: 2,
    company: 'UX',
    time: 'Remote',
    location: 'Anywhere',
    title: 'UI/UX Designer',
    avatarColor: 'bg-green',
    badgeColor: 'bg-pale-aqua text-aqua'
  },
  {
    id: 3,
    company: 'AN',
    time: 'Full Time',
    avatarColor: 'bg-yellow',
    location: 'Birmingham, UK',
    badgeColor: 'bg-pale-blue text-blue',
    title: 'Multimedia Artist & Animator'
  },
  {
    id: 4,
    company: 'FD',
    time: 'Part Time',
    location: 'Sydney, AU',
    avatarColor: 'bg-purple',
    title: 'Front End Developer',
    badgeColor: 'bg-pale-violet text-violet'
  },
  {
    id: 5,
    company: 'MD',
    time: 'Full Time',
    avatarColor: 'bg-orange',
    title: 'Mobile Developer',
    location: 'San Francisco, US',
    badgeColor: 'bg-pale-blue text-blue'
  },
  {
    id: 6,
    company: 'MD',
    time: 'Full Time',
    avatarColor: 'bg-pink',
    title: '.NET Developer',
    location: 'Manchester, UK',
    badgeColor: 'bg-pale-blue text-blue'
  }
];

const accordionList = [
  {
    no: 'One',
    expand: false,
    heading: 'How do I get my subscription receipt?',
    body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Are there any discounts for people in need?',
    body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Do you offer a free trial edit?',
    body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
  },
  {
    no: 'Four',
    expand: false,
    heading: 'How do I reset my Account password?',
    body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
  }
];

export default { facilities, testimonialList, jobList, accordionList };
