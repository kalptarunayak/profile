import { ContactInfo, SkillCategory, Project, WorkExperience, InterviewQA } from '../types';

export const candidateProfile: ContactInfo = {
  name: 'Kalpataru Nayak',
  title: 'Senior Java / J2EE Developer — Microservices & Enterprise Integration',
  email: 'Kalpatarunayatech@gmail.com',
  phone: '+91 7042109168',
  location: 'India',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  experienceYears: 8,
  summary:
    'Results-driven Software Engineer with 8+ years specializing in Java/J2EE enterprise application architectures, high-performance microservices, and asynchronous event integration. Proven track record designing, developing, and supporting distributed systems for global tier-1 clients across energy trading, insurance, enterprise publishing, warehouse execution (WES), and government sectors. Deep hands-on expertise in Spring Boot, Apache Camel (EAI patterns), Apache Kafka, Camunda BPM, and cloud-native containerized deployments (Kubernetes, Docker, Azure) backed by rigorous test-driven development (JUnit, Cucumber) and automated code-quality governance (SonarQube).',
};

export const executiveHighlights = [
  {
    metric: '8+ Years',
    label: 'Enterprise Java / J2EE Experience',
    subtext: 'Deep expertise in Spring Boot, Spring Integration & EAI Patterns',
  },
  {
    metric: '5 Major',
    label: 'Mission-Critical Enterprise Systems',
    subtext: 'Trading (Uniper), Insurance (NIC), SAP S/4HANA (OUP), WES & e-Gov',
  },
  {
    metric: 'Event-Driven',
    label: 'Asynchronous Messaging Pipelines',
    subtext: 'High-throughput real-time Kafka topics, RabbitMQ & Camel EAI routes',
  },
  {
    metric: 'Zero-Debt',
    label: 'Quality & TDD Governance',
    subtext: 'SonarQube / SonarLint enforcement with comprehensive JUnit test suites',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages & Core Frameworks',
    description: 'Modern Java ecosystem, robust object-oriented programming, and web frameworks',
    skills: [
      { name: 'Java (Java 8, Java 17)', level: 'Expert', highlight: true, usedInProjects: ['etrms-sunflower', 'insuremo-ebao', 'oup-migration', 'wes-honeywell', 'cctns-police'] },
      { name: 'J2EE / Servlets / JSP', level: 'Expert', highlight: false, usedInProjects: ['cctns-police'] },
      { name: 'Spring Boot', level: 'Expert', highlight: true, usedInProjects: ['etrms-sunflower', 'insuremo-ebao', 'oup-migration', 'wes-honeywell'] },
      { name: 'Spring (MVC, AOP, Core)', level: 'Expert', highlight: true, usedInProjects: ['cctns-police', 'wes-honeywell'] },
      { name: 'Hibernate / JPA', level: 'Expert', highlight: true, usedInProjects: ['cctns-police', 'etrms-sunflower'] },
      { name: 'Spring Batch', level: 'Advanced', highlight: true, usedInProjects: ['insuremo-ebao'] },
      { name: 'JavaScript & React JS', level: 'Proficient', highlight: false, usedInProjects: ['etrms-sunflower', 'insuremo-ebao'] },
    ],
  },
  {
    category: 'Microservices & Enterprise Integration (EAI)',
    description: 'Decoupled services, orchestrations, and enterprise message routing patterns',
    skills: [
      { name: 'Apache Camel', level: 'Expert', highlight: true, usedInProjects: ['etrms-sunflower', 'oup-migration'] },
      { name: 'Microservices Architecture', level: 'Expert', highlight: true, usedInProjects: ['etrms-sunflower', 'oup-migration', 'wes-honeywell', 'insuremo-ebao'] },
      { name: 'Spring Integration', level: 'Advanced', highlight: true, usedInProjects: ['wes-honeywell'] },
      { name: 'Camunda BPM Workflow', level: 'Advanced', highlight: true, usedInProjects: ['etrms-sunflower', 'wes-honeywell'] },
      { name: 'RESTful API & Swagger / OpenAPI', level: 'Expert', highlight: true, usedInProjects: ['insuremo-ebao', 'wes-honeywell', 'etrms-sunflower'] },
      { name: 'XSLT & XML Data Transformation', level: 'Advanced', highlight: false, usedInProjects: ['oup-migration'] },
    ],
  },
  {
    category: 'Messaging & Event Streaming',
    description: 'Decoupled event backbones and high-throughput real-time stream processing',
    skills: [
      { name: 'Apache Kafka', level: 'Expert', highlight: true, usedInProjects: ['etrms-sunflower', 'oup-migration'] },
      { name: 'RabbitMQ', level: 'Advanced', highlight: true, usedInProjects: ['wes-honeywell'] },
      { name: 'Event-Driven Architecture', level: 'Expert', highlight: true, usedInProjects: ['wes-honeywell', 'etrms-sunflower', 'oup-migration'] },
    ],
  },
  {
    category: 'Cloud, Containers & DevOps',
    description: 'Cloud deployments, containerization, build automation, and observability',
    skills: [
      { name: 'Docker', level: 'Advanced', highlight: true, usedInProjects: ['wes-honeywell', 'etrms-sunflower'] },
      { name: 'Kubernetes', level: 'Advanced', highlight: true, usedInProjects: ['etrms-sunflower'] },
      { name: 'Microsoft Azure (Cloud)', level: 'Proficient', highlight: true, usedInProjects: ['etrms-sunflower'] },
      { name: 'Kibana & Logstash (ELK)', level: 'Advanced', highlight: false, usedInProjects: ['wes-honeywell'] },
      { name: 'Git & GitHub / SVN', level: 'Expert', highlight: false, usedInProjects: ['wes-honeywell', 'etrms-sunflower', 'cctns-police'] },
      { name: 'Tomcat & Glassfish Servers', level: 'Advanced', highlight: false, usedInProjects: ['cctns-police'] },
    ],
  },
  {
    category: 'Databases & Persistence',
    description: 'Relational database design, query optimization, and complex transactions',
    skills: [
      { name: 'Oracle Database', level: 'Advanced', highlight: true, usedInProjects: ['etrms-sunflower'] },
      { name: 'PostgreSQL', level: 'Advanced', highlight: true, usedInProjects: ['etrms-sunflower'] },
      { name: 'MySQL', level: 'Expert', highlight: true, usedInProjects: ['wes-honeywell', 'cctns-police'] },
      { name: 'SQL Server 2014', level: 'Advanced', highlight: false, usedInProjects: ['insuremo-ebao'] },
      { name: 'JDBC & Stored Procedures', level: 'Expert', highlight: false, usedInProjects: ['cctns-police'] },
    ],
  },
  {
    category: 'Testing & Code Quality Governance',
    description: 'Test-driven development, automated testing, and static analysis governance',
    skills: [
      { name: 'JUnit (Unit Testing)', level: 'Expert', highlight: true, usedInProjects: ['etrms-sunflower', 'insuremo-ebao', 'oup-migration', 'wes-honeywell'] },
      { name: 'Cucumber (BDD/Contract Testing)', level: 'Advanced', highlight: true, usedInProjects: ['wes-honeywell'] },
      { name: 'SonarQube & SonarLint', level: 'Expert', highlight: true, usedInProjects: ['etrms-sunflower', 'insuremo-ebao', 'oup-migration'] },
      { name: 'Jasper Reports (iReport)', level: 'Proficient', highlight: false, usedInProjects: ['cctns-police'] },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'etrms-sunflower',
    title: 'ETRMS & Sunflower — Multi-Commodity Gas & Power Trading Platform Transformation',
    client: 'Uniper',
    role: 'Module Lead',
    domain: 'Energy & Trading',
    period: '2021 – Present',
    summary:
      'High-throughput distributed trading platform modernization enabling energy trade lifecycle management across Gas, Coal, Power, and Oil markets with dynamic trade rules, Camel routing, Kafka event queues, and Camunda workflow execution.',
    environment: [
      'Java 17',
      'Spring Boot',
      'Apache Camel',
      'Apache Kafka',
      'Camunda BPM',
      'Kubernetes',
      'Azure Cloud',
      'SQL / PostgreSQL',
      'JUnit',
      'SonarQube',
      'React JS',
    ],
    keyHighlights: [
      'Led technical requirement analysis and architectural design for the trading platform migration to Java 17 and Spring Boot microservices.',
      'Constructed robust Apache Camel middleware routes implementing Enterprise Integration Patterns (EIP) for heterogeneous commodity data ingestion.',
      'Designed event-driven Kafka messaging pipelines for real-time trade updates across distributed valuation and compliance modules.',
      'Integrated Camunda BPM workflows to orchestrate multi-step trade approval, risk checks, and settlement sequences.',
      'Enforced rigorous zero-technical-debt governance with SonarQube & SonarLint, achieving comprehensive JUnit code coverage.',
      'Engineered responsive React JS dashboard interfaces for trade operators to monitor deal status and commodity positions.',
    ],
    starBreakdown: {
      situation:
        'Uniper needed to modernize its core ETRMS trading platform from legacy monolithic systems into a cloud-native microservices architecture capable of handling fluctuating commodity volatility across gas, power, oil, and coal contracts.',
      task:
        'As Module Lead, translate complex business trade requirements into resilient microservices, develop integration pipelines using Apache Camel and Kafka, orchestrate approval workflows via Camunda, and maintain high code quality standards.',
      action: [
        'Migrated core domain modules to Java 17 and Spring Boot, leveraging modern language features for performance and memory optimization.',
        'Engineered Apache Camel routes to integrate external trading exchange feeds with internal risk calculators and ledger services.',
        'Configured Kafka topics with partition strategies to guarantee ordered delivery of trade execution events without bottlenecking.',
        'Implemented Camunda BPM orchestration to automate complex trade approval matrices and compliance checks.',
        'Established automated CI code quality gates using SonarQube and comprehensive JUnit unit tests.',
      ],
      result: [
        'Successfully migrated critical trading workflows with zero data loss during cutover.',
        'Reduced trade execution and reconciliation turnaround latency across trading desks.',
        'Maintained high code quality and test coverage across all microservice deployments on Azure Kubernetes Service (AKS).',
      ],
    },
    technicalChallengesSolved: [
      'High concurrency trade volume spikes: Resolved through asynchronous Kafka buffering and optimized Spring Boot connection pools.',
      'Heterogeneous data schemas from external trade partners: Unified using Apache Camel content-based routers and transformation processors.',
      'Multi-step compliance approval deadlocks: Streamlined via Camunda BPM state machines and automated timeout compensations.',
    ],
    interviewTalkingPoints: [
      'Why Java 17 + Spring Boot: Enhanced GC performance (ZGC/G1), record classes for immutable DTOs, and faster container startup times.',
      'Integration strategy: Used Apache Camel for enterprise routing patterns (Splitter, Aggregator, Dead Letter Channel) decoupled from business microservices.',
      'Resilience in Trading: Handled trade event duplicates using idempotent consumer patterns in Kafka and database unique constraints.',
    ],
    architectureFlow: {
      title: 'ETRMS Gas & Energy Trading Flow',
      description: 'Distributed trade execution and valuation architecture powered by Camel, Kafka, and Camunda',
      nodes: [
        { id: 'ui', label: 'React Trading UI', type: 'client', description: 'Real-time trader portal & position blotter' },
        { id: 'gw', label: 'API Gateway', type: 'gateway', description: 'Authentication, rate limiting & request routing' },
        { id: 'trade-svc', label: 'Trade Service (Spring Boot)', type: 'service', description: 'Validates trade contract specs (Java 17)' },
        { id: 'camel-eai', label: 'Apache Camel EAI Hub', type: 'service', description: 'EIP routing, format normalization & enrichment' },
        { id: 'kafka', label: 'Apache Kafka Broker', type: 'queue', description: 'Trade events topic (partitioned by commodity)' },
        { id: 'camunda', label: 'Camunda BPM Engine', type: 'service', description: 'Orchestrates multi-level risk & compliance approvals' },
        { id: 'db', label: 'PostgreSQL / Azure SQL', type: 'database', description: 'Transactional trade ledger & audit history' },
      ],
      connections: [
        { from: 'ui', to: 'gw', label: 'HTTPS / REST' },
        { from: 'gw', to: 'trade-svc', label: 'REST API' },
        { from: 'trade-svc', to: 'camel-eai', label: 'Direct EIP' },
        { from: 'camel-eai', to: 'kafka', label: 'Publish Trade Event' },
        { from: 'kafka', to: 'camunda', label: 'Trigger Workflow' },
        { from: 'camunda', to: 'db', label: 'Persist State & Audit' },
      ],
    },
  },
  {
    id: 'insuremo-ebao',
    title: 'Insuremo–Ebao Insurance Platform Integration & Data Migration',
    client: 'National Insurance Company (NIC)',
    role: 'Senior Team Member',
    domain: 'Insurance',
    period: '2021 – 2022',
    summary:
      'High-volume policy management transformation integrating multiple third-party web aggregators via secure REST APIs and executing automated batch migrations from Insuremo to the EBAO core insurance platform.',
    environment: [
      'Java 17',
      'Spring Boot',
      'Spring Batch',
      'REST APIs',
      'SQL Server',
      'Putty / Unix',
      'JUnit',
      'SonarLint',
      'React JS',
    ],
    keyHighlights: [
      'Reviewed technical specifications and developed Spring Boot microservices interfacing with web aggregators (PolicyBazaar, Coverfox, etc.).',
      'Engineered chunk-based Spring Batch jobs to migrate hundreds of thousands of active policy records, premium payment histories, and claims into EBAO.',
      'Designed resilient error-handling, rollback, and restart capabilities for large-scale insurance batch processing.',
      'Conducted exhaustive JUnit testing validating policy computation rules, premium taxes, and endorsement calculations.',
      'Configured SonarQube and SonarLint for code quality governance and static security scanning.',
      'Assisted in React JS UI enhancements for policy issuance monitoring screens.',
    ],
    starBreakdown: {
      situation:
        'NIC needed to migrate core underwriting and policyholder records from the legacy Insuremo architecture to the EBAO platform while keeping multi-channel aggregator integrations running 24/7.',
      task:
        'Develop Spring Boot REST integrations for incoming aggregator policy requests and implement performant Spring Batch data migration pipelines with SQL Server backend.',
      action: [
        'Built RESTful API endpoints adhering to standard insurance schemas with comprehensive validation.',
        'Constructed custom Spring Batch Readers, Processors, and Writers with chunking and skipped-record error logging to handle anomalous policy records.',
        'Optimized SQL Server batch queries and connection pooling to accelerate bulk record insertion.',
        'Maintained rigorous unit test suites with JUnit covering edge cases in premium calculations.',
      ],
      result: [
        'Successfully migrated large-scale historical policy databases with zero transaction discrepancies.',
        'Maintained 99.9% uptime for incoming aggregator quote and bind APIs during migration windows.',
      ],
    },
    technicalChallengesSolved: [
      'Data format discrepancies between Insuremo and EBAO: Designed robust mapping converters in Spring Batch processors with custom format validators.',
      'Memory consumption during massive batch runs: Implemented chunk-oriented processing with commit intervals to prevent heap out-of-memory errors.',
    ],
    interviewTalkingPoints: [
      'Spring Batch Architecture: ItemReader -> ItemProcessor -> ItemWriter pattern with custom SkipPolicy and RetryPolicy for resilient execution.',
      'REST API Security & Quality: Input sanitization, custom exception handling filters, and SonarLint compliance.',
    ],
    architectureFlow: {
      title: 'Insuremo–EBAO Insurance Integration & Batch Flow',
      description: 'Real-time aggregator REST API gateway alongside asynchronous Spring Batch migration pipeline',
      nodes: [
        { id: 'agg', label: 'Web Aggregators (PolicyBazaar etc.)', type: 'external', description: 'External policy quotation & bind requests' },
        { id: 'rest-api', label: 'Spring Boot REST Gateway', type: 'service', description: 'Validates & processes live quotes (Java 17)' },
        { id: 'batch', label: 'Spring Batch Migration Engine', type: 'service', description: 'Chunk-based reader/processor/writer pipeline' },
        { id: 'insuremo', label: 'Insuremo Legacy DB', type: 'database', description: 'Source policy and claims historical records' },
        { id: 'ebao-db', label: 'EBAO Core SQL Server', type: 'database', description: 'Target consolidated insurance database' },
        { id: 'react-ui', label: 'Admin React Portal', type: 'client', description: 'Batch monitoring and exception reconciliation' },
      ],
      connections: [
        { from: 'agg', to: 'rest-api', label: 'REST / JSON API' },
        { from: 'rest-api', to: 'ebao-db', label: 'Direct Sync Write' },
        { from: 'insuremo', to: 'batch', label: 'Batch ItemReader' },
        { from: 'batch', to: 'ebao-db', label: 'Chunk ItemWriter' },
        { from: 'react-ui', to: 'batch', label: 'Trigger / Monitor Job' },
      ],
    },
  },
  {
    id: 'oup-migration',
    title: 'OUP SAP ECC to SAP S/4HANA Enterprise Migration Middleware',
    client: 'Oxford University Press (OUP)',
    role: 'Senior Team Member',
    domain: 'Publishing & Enterprise ERP',
    period: '2019 – 2021',
    summary:
      'Enterprise middleware solution using Apache Camel and Apache Kafka to orchestrate high-fidelity file transfer, XML message transformation (XSLT), and seamless bi-directional synchronization between legacy SAP ECC and modern SAP S/4HANA systems.',
    environment: [
      'Java 8',
      'Spring Boot',
      'Apache Camel',
      'Apache Kafka',
      'XSLT & XML',
      'Microservices',
      'SQL',
      'JUnit',
      'SonarQube',
      'Linux',
    ],
    keyHighlights: [
      'Analyzed SAP S/4HANA consulting functional blueprints and performed technical feasibility analysis for enterprise data extraction.',
      'Designed and coded Apache Camel microservice routes implementing Enterprise Application Integration (EAI) patterns (Content Enricher, Splitter, Aggregator).',
      'Leveraged Apache Kafka for reliable, high-throughput asynchronous file transfer and change-data-capture streaming.',
      'Crafted complex XSLT transformation stylesheets to convert legacy IDoc XML payloads into S/4HANA compliant schemas.',
      'Conducted end-to-end integration testing and automated regression checks in DEV/TEST environments.',
      'Enforced code cleanliness and SonarQube quality gates across all middleware components.',
    ],
    starBreakdown: {
      situation:
        'Oxford University Press was undergoing a global ERP digital transformation, migrating catalog, royalty, order management, and financial records from legacy SAP ECC to SAP S/4HANA without disrupting daily publishing operations.',
      task:
        'Implement resilient Apache Camel integration microservices to consume legacy file exports, transform complex XML schemas via XSLT, and deliver validated messages to S/4HANA via Kafka streaming topics.',
      action: [
        'Constructed custom Camel routes utilizing File/FTP components, Kafka producers/consumers, and XSLT processors.',
        'Implemented Dead Letter Channel (DLC) error-handling strategies with automatic retry queues for failed XML conversions.',
        'Created exhaustive JUnit test suites mocking SAP endpoints to validate XML transformation logic against hundreds of sample payloads.',
        'Configured Kafka topic partitions to ensure concurrent processing while maintaining book catalog sequence order.',
      ],
      result: [
        'Delivered the integration middleware on schedule with 100% data fidelity during cutover.',
        'Eliminated manual ERP reconciliation overhead through automated real-time transformation and error logging.',
      ],
    },
    technicalChallengesSolved: [
      'Massive XML file payloads causing memory overhead: Utilized Apache Camel streaming mode and XSLT tokenizers to process files without loading entire documents into JVM memory.',
      'SAP system throttling: Implemented Camel Throttler and Kafka consumer rate limits to prevent target system saturation.',
    ],
    interviewTalkingPoints: [
      'Why Apache Camel over custom code: Declarative DSL, pre-built enterprise integration patterns (EIP), built-in exception handling, and seamless Kafka binding.',
      'XSLT Performance: Compiled XSLT templates (Templates cache) to avoid stylesheet recompilation on every transaction.',
    ],
    architectureFlow: {
      title: 'OUP SAP ECC to S/4HANA Migration Pipeline',
      description: 'Asynchronous EAI middleware powered by Apache Camel, XSLT, and Apache Kafka',
      nodes: [
        { id: 'ecc', label: 'Legacy SAP ECC', type: 'external', description: 'Generates catalog & royalty IDoc XML files' },
        { id: 'camel-ingest', label: 'Camel File Ingestion Route', type: 'service', description: 'Polls, validates, and streams incoming files' },
        { id: 'xslt-proc', label: 'XSLT Transformation Engine', type: 'service', description: 'Transforms legacy XML to S/4HANA schema' },
        { id: 'kafka-topic', label: 'Kafka Migration Topic', type: 'queue', description: 'Ordered, persistent message queue' },
        { id: 'camel-dispatch', label: 'Camel Delivery Service', type: 'service', description: 'Consumer route with retry & DLC support' },
        { id: 's4hana', label: 'SAP S/4HANA Target', type: 'external', description: 'New cloud ERP destination' },
      ],
      connections: [
        { from: 'ecc', to: 'camel-ingest', label: 'SFTP / File Export' },
        { from: 'camel-ingest', to: 'xslt-proc', label: 'XML Stream' },
        { from: 'xslt-proc', to: 'kafka-topic', label: 'Kafka Producer' },
        { from: 'kafka-topic', to: 'camel-dispatch', label: 'Kafka Consumer' },
        { from: 'camel-dispatch', to: 's4hana', label: 'OData / RFC Call' },
      ],
    },
  },
  {
    id: 'wes-honeywell',
    title: 'Honeywell Intelligrated — Warehouse Execution System (WES)',
    client: 'Big Lots, DMW&H, Home Depot',
    role: 'Team Member',
    domain: 'Warehouse & Logistics',
    period: '2016 – 2019',
    summary:
      'Mission-critical Warehouse Execution System (WES) bridging Warehouse Management Systems (WMS) with real-time Warehouse Control Systems (WCS) for automated material handling, automated conveyor routing, and dynamic case/pallet allocation.',
    environment: [
      'Spring Boot',
      'Microservices',
      'Spring Integration',
      'RabbitMQ',
      'Camunda BPM',
      'MySQL',
      'Swagger',
      'Cucumber BDD',
      'JUnit',
      'Docker',
      'Kibana / ELK',
      'Git',
    ],
    keyHighlights: [
      'Built high-performance REST APIs and asynchronous event-based communication flows connecting warehouse control hardware with enterprise inventory managers.',
      'Developed real-time allocation logic for cases, cartons, and pallets across high-speed sorting conveyor systems.',
      'Designed event messaging architectures using RabbitMQ and Spring Integration for sub-second communication latency.',
      'Utilized Camunda BPM to model physical warehouse routing states, sortation logic, and automated diverting rules.',
      'Created comprehensive Behavior-Driven Development (BDD) test suites using Cucumber and JUnit for isolated component validation.',
      'Containerized services using Docker and monitored operational logs via Kibana for rapid defect triage.',
    ],
    starBreakdown: {
      situation:
        'Large automated distribution centers (Big Lots, Home Depot) required sub-second decision making to direct physical conveyor diverters, automated sorters, and robotic pickers based on real-time WMS order priorities.',
      task:
        'Develop Spring Boot microservices with Spring Integration and RabbitMQ to receive high-frequency sensor events, calculate optimal pallet allocations, and dispatch actuation commands to WCS.',
      action: [
        'Engineered event listeners using RabbitMQ queues with manual acknowledgment and dead-letter exchanges for zero-loss message reliability.',
        'Created Camunda workflow definitions governing case lifecycle from induction to destination chute.',
        'Authored Cucumber BDD scenarios allowing logistics operations experts to validate complex warehouse routing rules.',
        'Instrumented logging with structured JSON output ingested into Kibana for live warehouse line troubleshooting.',
      ],
      result: [
        'Achieved sub-100ms response times for conveyor routing decisions during peak holiday shipping volumes.',
        'Significantly lowered downtime through automated defect diagnosis and Dockerized service resilience.',
      ],
    },
    technicalChallengesSolved: [
      'High-velocity physical sensor events: Implemented RabbitMQ prefetch optimization and Spring concurrent message listeners.',
      'Complex sortation state management: Solved by modelling routing rules in Camunda state tables with optimistic locking in MySQL.',
    ],
    interviewTalkingPoints: [
      'RabbitMQ vs Kafka in WES: RabbitMQ chosen for complex routing keys, direct exchange priority queues, and individual message acknowledgments required by physical conveyors.',
      'Cucumber Testing: Bridged technical development with supply chain domain experts by defining automated acceptance criteria in Gherkin syntax.',
    ],
    architectureFlow: {
      title: 'Honeywell WES Warehouse Routing Architecture',
      description: 'Sub-second real-time event pipeline coordinating physical automation with enterprise inventory',
      nodes: [
        { id: 'wms', label: 'Enterprise WMS', type: 'external', description: 'Order manifests & inventory priorities' },
        { id: 'wcs', label: 'Conveyor & PLC Hardware (WCS)', type: 'external', description: 'Barcode scanners & photo eyes' },
        { id: 'wes-api', label: 'WES Inbound Gateway (Spring Boot)', type: 'gateway', description: 'Fast REST / Socket listener' },
        { id: 'rabbit', label: 'RabbitMQ Message Broker', type: 'queue', description: 'Priority routing & sensor event queues' },
        { id: 'alloc-svc', label: 'Allocation & Routing Engine', type: 'service', description: 'Calculates chute diverts & pallet grouping' },
        { id: 'camunda-wcs', label: 'Camunda State Orchestrator', type: 'service', description: 'Tracks carton physical journey' },
        { id: 'mysql', label: 'MySQL State DB', type: 'database', description: 'High-speed local warehouse storage' },
      ],
      connections: [
        { from: 'wcs', to: 'wes-api', label: 'High-frequency Sensor Event' },
        { from: 'wms', to: 'wes-api', label: 'Order manifest' },
        { from: 'wes-api', to: 'rabbit', label: 'Publish Event' },
        { from: 'rabbit', to: 'alloc-svc', label: 'Consume with Prefetch' },
        { from: 'alloc-svc', to: 'camunda-wcs', label: 'State Transition' },
        { from: 'camunda-wcs', to: 'mysql', label: 'Persist state' },
        { from: 'alloc-svc', to: 'wcs', label: 'Send Diverter Actuation' },
      ],
    },
  },
  {
    id: 'cctns-police',
    title: 'CCTNS — Crime and Criminal Tracking Network & Systems',
    client: 'Delhi Police, Himachal Pradesh Police',
    role: 'Team Member',
    domain: 'Government & e-Governance',
    period: '2014 – 2016',
    summary:
      'Flagship national e-Governance system for the Government of India, interconnecting over 15,000 police stations nationwide for crime record digitization, FIR tracking, investigation workflow automation, and judicial reporting.',
    environment: [
      'Java / J2EE',
      'JSP',
      'Servlets',
      'JDBC',
      'Spring (MVC, AOP)',
      'Hibernate ORM',
      'MySQL / SQLyog',
      'Glassfish / Tomcat',
      'Jasper Reports (iReport)',
    ],
    keyHighlights: [
      'Designed and coded core Spring MVC controller layers and service classes adhering strictly to clean object-oriented design principles.',
      'Developed responsive JSP UI screens for First Information Report (FIR) registration, criminal dossiers, and evidence tracking.',
      'Integrated Hibernate ORM for database connectivity, entity mapping, and transactional consistency.',
      'Authored optimized MySQL stored procedures and complex SQL views for fast query retrieval across millions of historical case files.',
      'Implemented dynamic Jasper Reports templates (iReport) for automated court chargesheet and statistical crime report generation.',
    ],
    starBreakdown: {
      situation:
        'The Government of India needed a robust, nationwide software backbone (CCTNS) to eliminate manual paper FIRs, connect police stations across states, and standardize criminal record searches.',
      task:
        'Implement core MVC modules, develop stored procedures for multi-parameter search, configure Hibernate ORM persistence, and build official government report generators using Jasper Reports.',
      action: [
        'Built secure Spring MVC controllers with Spring AOP for audit logging and role-based access control.',
        'Wrote complex SQL queries, indexes, and stored procedures to handle multi-criteria criminal record lookups.',
        'Configured Hibernate session management and connection caching to optimize performance under heavy load.',
        'Created parameterized Jasper Reports templates for printable FIR copies, chargesheets, and police department statistical dashboards.',
      ],
      result: [
        'Delivered critical modules utilized daily by state police officers for law enforcement and citizen service delivery.',
        'Reduced FIR processing and background verification turnaround time from weeks to minutes.',
      ],
    },
    technicalChallengesSolved: [
      'Complex multi-table queries spanning millions of citizen records: Optimized through indexed database views and stored procedures.',
      'Strict legal formatting requirements for printed documents: Solved via pixel-accurate Jasper Reports layout designs with digital watermarks.',
    ],
    interviewTalkingPoints: [
      'Core Java & MVC Mastery: Strong foundation in Servlets, Spring lifecycle, Hibernate caching levels (Level 1 & Level 2), and clean Separation of Concerns.',
      'Transactional Integrity: Spring @Transactional boundary management ensuring atomic updates across multi-stage FIR filings.',
    ],
  },
];

export const workExperienceList: WorkExperience[] = [
  {
    id: 'cognizant',
    company: 'Cognizant Technology Solutions',
    role: 'Associate — Software Developer',
    period: 'Apr 2021 – Present',
    location: 'India',
    summary:
      'Engaged in enterprise microservice development, large-scale cloud-native modernization, and mission-critical production support for global enterprise clients in Energy Trading (Uniper) and Insurance (NIC).',
    keyResponsibilities: [
      'Architect and develop microservice applications utilizing Java 17, Spring Boot, and Apache Camel for distributed integration.',
      'Design event streaming pipelines with Apache Kafka and workflow state machines using Camunda BPM.',
      'Enforce code quality standards with SonarQube, maintaining zero blocker bugs and high unit test coverage with JUnit.',
      'Deploy and support containerized workloads on Kubernetes and Microsoft Azure cloud infrastructure.',
      'Contribute to frontend user interface development using React JS for operational management dashboards.',
    ],
    coreTech: ['Java 17', 'Spring Boot', 'Apache Camel', 'Kafka', 'Camunda', 'Kubernetes', 'Azure', 'SonarQube', 'React JS', 'JUnit'],
    projectsInvolved: ['etrms-sunflower', 'insuremo-ebao'],
  },
  {
    id: 'tech-mahindra',
    company: 'Tech Mahindra Ltd.',
    role: 'Software Engineer',
    period: 'Jun 2014 – Apr 2021',
    location: 'India',
    summary:
      'Delivered Java/J2EE based web architectures, enterprise application integration (EAI) middleware, and automated warehouse execution systems for premier global clients including Oxford University Press, Honeywell Intelligrated, and Government of India.',
    keyResponsibilities: [
      'Developed Apache Camel integration microservices and Kafka streaming channels for enterprise SAP S/4HANA migration.',
      'Engineered sub-second real-time event routing and allocation microservices for Honeywell Warehouse Execution Systems (WES).',
      'Built automated BDD test suites with Cucumber and unit test coverage with JUnit to validate complex logistics rules.',
      'Designed Spring MVC controllers, Hibernate ORM mapping, and Jasper Reports for the national CCTNS e-governance platform.',
      'Diagnosed and resolved complex integration, database, and concurrency defects across multi-tier enterprise systems.',
    ],
    coreTech: ['Java 8', 'Spring Boot', 'Spring Integration', 'Apache Camel', 'Kafka', 'RabbitMQ', 'Docker', 'Hibernate', 'MySQL', 'Cucumber'],
    projectsInvolved: ['oup-migration', 'wes-honeywell', 'cctns-police'],
  },
];

export const interviewQAList: InterviewQA[] = [
  {
    category: 'Enterprise Integration & Architecture',
    question: 'How do you choose between Apache Camel and Spring Integration in your enterprise projects?',
    answerSummary:
      'Apache Camel is preferred when you need a rich catalog of 300+ out-of-the-box component connectors, complex enterprise integration patterns (Splitter, Aggregator, Content Enricher), declarative Java/XML DSL, and robust multi-protocol transformation (like XSLT/Kafka/FTP in the OUP SAP migration). Spring Integration is ideal for lightweight, Spring-centric internal message channels and event-driven decoupling inside a dedicated Spring ecosystem (like the Honeywell WES solution).',
    talkingPoints: [
      'Used Apache Camel extensively on Uniper ETRMS and OUP Migration for EIP patterns and protocol translation.',
      'Leveraged Dead Letter Channel (DLC) and idempotent consumers in Camel to prevent message duplication in trading and publishing pipelines.',
      'Utilized Spring Integration in Honeywell WES to connect REST gateways to RabbitMQ internal priority queues.',
    ],
    relevantProjects: ['etrms-sunflower', 'oup-migration', 'wes-honeywell'],
  },
  {
    category: 'Event Streaming & Messaging',
    question: 'When do you use Apache Kafka vs RabbitMQ, and how do you ensure zero message loss?',
    answerSummary:
      'I use Apache Kafka for high-throughput event streaming, log retention, and replayability across decoupled microservices (e.g. commodity trade events in Uniper ETRMS and bulk ERP updates in OUP). I use RabbitMQ when I need sophisticated AMQP exchange routing (direct, topic, fanout), priority queues, and granular per-message acknowledgments (e.g. sub-second physical conveyor sensor routing in Honeywell WES).',
    talkingPoints: [
      'Zero message loss strategy: Kafka producer acks=all, min.insync.replicas=2, manual commit after DB persistence.',
      'RabbitMQ reliability: publisher confirms, durable queues, manual ACK mode with dead-letter exchanges (DLX).',
      'Idempotency: Enforce unique business transaction IDs to gracefully handle retry duplicates.',
    ],
    relevantProjects: ['etrms-sunflower', 'oup-migration', 'wes-honeywell'],
  },
  {
    category: 'Performance & Optimization',
    question: 'How do you optimize Java microservices and Spring Boot for cloud-native container deployments?',
    answerSummary:
      'By leveraging Java 17 features, tuning JVM garbage collection (G1GC / ZGC), optimizing database connection pooling (HikariCP), avoiding N+1 Hibernate query issues through fetch joins, and configuring lightweight container layers with multi-stage Docker builds.',
    talkingPoints: [
      'Java 17 migration on Uniper and NIC: Leveraging records, pattern matching, and enhanced GC behavior.',
      'Spring Batch optimization: Chunk-based processing with tuned commit intervals and pagination readers to keep memory footprint bounded.',
      'Asynchronous thread pools: Configuring TaskExecutor with defined bounded queues and rejection handlers.',
    ],
    relevantProjects: ['etrms-sunflower', 'insuremo-ebao', 'wes-honeywell'],
  },
  {
    category: 'Code Quality & Testing Governance',
    question: 'What is your methodology for test-driven development and code quality enforcement?',
    answerSummary:
      'I enforce strict quality gates using SonarQube and SonarLint in development IDEs, ensuring zero blocker/critical bugs and maintaining high code coverage. I implement a multi-layered testing pyramid with JUnit for isolated unit testing, Cucumber for BDD business logic verification, and mock frameworks (Mockito) for external dependencies.',
    talkingPoints: [
      'Integrated SonarLint directly into IntelliJ/Eclipse to catch code smells before commit.',
      'Implemented Cucumber BDD scenarios for Honeywell WES to translate warehouse logistics rules into automated executable tests.',
      'Created isolated contract and integration tests mocking SAP endpoints and external web aggregators.',
    ],
    relevantProjects: ['etrms-sunflower', 'insuremo-ebao', 'wes-honeywell', 'oup-migration'],
  },
  {
    category: 'Workflow & Orchestration',
    question: 'How does Camunda BPM enhance microservices orchestration in your projects?',
    answerSummary:
      'Camunda BPM acts as a stateful orchestrator that decouples complex multi-step business workflows from individual microservices. It manages long-running state, provides visual BPMN flow tracking, handles automated compensations on failure, and enables human-in-the-loop task assignments.',
    talkingPoints: [
      'In Uniper ETRMS: Orchestrated multi-tier trade approvals, credit checks, and automated risk scoring.',
      'In Honeywell WES: Governed real-time physical carton states from induction scanner to destination chute.',
      'Resilience: Built-in incident management, automatic retries on service tasks, and audit history.',
    ],
    relevantProjects: ['etrms-sunflower', 'wes-honeywell'],
  },
];
