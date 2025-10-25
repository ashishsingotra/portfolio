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
        date: "December 2021 - January 2025",
        points: [
            "Developed and maintained robust Java-based applications using frameworks like Spring Boot and Hibernate, enhancing application performance and reliability.",
            "Designed and implemented RESTful APIs to integrate with front-end services, enabling seamless data exchange and improving user experience.",
            "Collaborated with cross-functional teams including front-end developers, QA testers, and product managers to deliver high-quality software solutions on time.",
            "Implemented robust security measures, including authentication and authorization protocols, to protect sensitive data and maintain compliance with industry standards.",
            "Developed and executed automated test cases using JUnit and Mockito, achieving a 30% reduction in post-release bugs and ensuring high-quality deliverables.",
        ],
    },
    {
        title: "Java Full Stack Developer",
        company_name: "Accolite",
        icon: tcs,
        iconBg: "#accbe1",
        date: "March 2025 - Present",
        points: [
            "Developed and optimized data processing modules in Java, improving system efficiency and scalability for large-scale data operations.",
            "Implemented RESTful APIs to serve customer-specific data requests, ensuring reliable and efficient communication between backend services and client applications.",
            "Designed and maintained SQL stored procedures utilized by APIs for on-demand data processing, enhancing performance and meeting dynamic customer requirements.",
            "Debugged and enhanced existing scripts written in Python and Perl to integrate new functionalities, streamline workflows, and support evolving business needs.",
            "Upgraded legacy Java applications to modern frameworks, ensuring better maintainability, performance, and compatibility with current technologies.",
            "Managed DevOps responsibilities, including deployment of production changes, monitoring system performance, and maintaining stable application environments across releases.",
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