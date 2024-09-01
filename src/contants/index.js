import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    pricewise,
    spring,
    docker,
    java,
    jenkins,
    tcs,
    react
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: spring,
        name: "Spring boot",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: jenkins,
        name: "jenkins",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Java Full Stack Developer",
        company_name: "Tata Consultancy developer",
        icon: tcs,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developed and maintained robust Java-based applications using frameworks like Spring Boot and Hibernate, enhancing application performance and reliability.",
            "Designed and implemented RESTful APIs to integrate with front-end services, enabling seamless data exchange and improving user experience.",
            "Collaborated with cross-functional teams including front-end developers, QA testers, and product managers to deliver high-quality software solutions on time.",
            "Implemented robust security measures, including authentication and authorization protocols, to protect sensitive data and maintain compliance with industry standards.",
            "Developed and executed automated test cases using JUnit and Mockito, achieving a 30% reduction in post-release bugs and ensuring high-quality deliverables.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ashishsingotra',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ashishsingotra',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Order Microservice',
        description: 'It is a standalone service in a microservices architecture managing order functions like creation, updating, processing, and data querying independently. It interacts with other services like Inventory , Ordering to complete order processes.',
        link: 'https://github.com/ashishsingotra/Order-Microservice',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Restaurant Order Management',
        description: ' It is a System in Java streamlines ordering, manages menu items, processes payments, and tracks orders. It can be used by staff or integrated into a customer app for a digital experience. Features, architecture, and technology stack are key components of the project',
        link: 'https://github.com/ashishsingotra/Online-Food-Order',
    }
];