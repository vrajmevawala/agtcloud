// Currency conversion rates (as of May 2025)
export const currencyRates = {
  USD: 1.0,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.5,
  JPY: 154.2,
  AUD: 1.51,
  CAD: 1.36,
  CHF: 0.91,
  CNY: 7.24,
  SEK: 10.42,
  NZD: 1.63,
  MXN: 16.85,
  SGD: 1.34,
  HKD: 7.81,
  NOK: 10.68,
  KRW: 1345.2,
  TRY: 32.15,
  RUB: 92.3,
  BRL: 5.07,
  ZAR: 18.42,
}

// Azure service categories and services data
export const azureServices = {
  categories: [
    { id: "compute", name: "Compute" },
    { id: "containers", name: "Containers" },
    { id: "databases", name: "Databases" },
    { id: "storage", name: "Storage" },
    { id: "networking", name: "Networking" },
    { id: "ai", name: "AI + Machine Learning" },
    { id: "analytics", name: "Analytics" },
    { id: "web", name: "Web" },
    { id: "iot", name: "Internet of Things" },
    { id: "integration", name: "Integration" },
    { id: "identity", name: "Identity" },
    { id: "security", name: "Security" },
    { id: "devops", name: "DevOps" },
    { id: "management", name: "Management + Governance" },
    { id: "migration", name: "Migration" },
    { id: "mixed-reality", name: "Mixed Reality" },
    { id: "hybrid-multicloud", name: "Hybrid + Multicloud" },
  ],

  services: [
    // Compute
    { id: "vm", name: "Virtual Machines", icon: "🖥️", category: "compute", type: "vm" },
    { id: "vmss", name: "Virtual Machine Scale Sets", icon: "🖥️", category: "compute", type: "vmss" },
    { id: "functions", name: "Functions", icon: "λ", category: "compute", type: "functions" },
    { id: "app-service", name: "App Service", icon: "📱", category: "compute", type: "app-service" },
    { id: "batch", name: "Batch", icon: "⚙️", category: "compute", type: "batch" },
    { id: "cloud-services", name: "Cloud Services", icon: "☁️", category: "compute", type: "cloud-services" },
    { id: "service-fabric", name: "Service Fabric", icon: "🧩", category: "compute", type: "service-fabric" },
    { id: "dedicated-host", name: "Dedicated Host", icon: "🏠", category: "compute", type: "dedicated-host" },
    { id: "disk-storage", name: "Disk Storage", icon: "💿", category: "compute", type: "disk-storage" },

    // Containers
    { id: "aks", name: "Azure Kubernetes Service", icon: "🔄", category: "containers", type: "aks" },
    {
      id: "container-instances",
      name: "Container Instances",
      icon: "📦",
      category: "containers",
      type: "container-instances",
    },
    {
      id: "container-registry",
      name: "Container Registry",
      icon: "🗃️",
      category: "containers",
      type: "container-registry",
    },
    {
      id: "app-service-containers",
      name: "App Service (Containers)",
      icon: "📱",
      category: "containers",
      type: "app-service-containers",
    },
    {
      id: "red-hat-openshift",
      name: "Red Hat OpenShift",
      icon: "🔴",
      category: "containers",
      type: "red-hat-openshift",
    },

    // Databases
    { id: "sql-database", name: "SQL Database", icon: "🗄️", category: "databases", type: "sql-database" },
    { id: "cosmos-db", name: "Cosmos DB", icon: "🌌", category: "databases", type: "cosmos-db" },
    { id: "mysql", name: "MySQL", icon: "🐬", category: "databases", type: "mysql" },
    { id: "postgresql", name: "PostgreSQL", icon: "🐘", category: "databases", type: "postgresql" },
    { id: "mariadb", name: "MariaDB", icon: "🐬", category: "databases", type: "mariadb" },
    {
      id: "sql-managed-instance",
      name: "SQL Managed Instance",
      icon: "🗄️",
      category: "databases",
      type: "sql-managed-instance",
    },
    { id: "redis-cache", name: "Redis Cache", icon: "🔄", category: "databases", type: "redis-cache" },
    {
      id: "database-migration",
      name: "Database Migration Service",
      icon: "🔄",
      category: "databases",
      type: "database-migration",
    },

    // Storage
    { id: "blob-storage", name: "Blob Storage", icon: "📁", category: "storage", type: "blob-storage" },
    { id: "file-storage", name: "File Storage", icon: "📄", category: "storage", type: "file-storage" },
    { id: "queue-storage", name: "Queue Storage", icon: "📋", category: "storage", type: "queue-storage" },
    { id: "table-storage", name: "Table Storage", icon: "📊", category: "storage", type: "table-storage" },
    { id: "storage-accounts", name: "Storage Accounts", icon: "💾", category: "storage", type: "storage-accounts" },
    { id: "archive-storage", name: "Archive Storage", icon: "🗃️", category: "storage", type: "archive-storage" },
    { id: "data-box", name: "Data Box", icon: "📦", category: "storage", type: "data-box" },
    { id: "backup", name: "Backup", icon: "🔄", category: "storage", type: "backup" },
    { id: "site-recovery", name: "Site Recovery", icon: "🔄", category: "storage", type: "site-recovery" },

    // Networking
    { id: "virtual-network", name: "Virtual Network", icon: "🌐", category: "networking", type: "virtual-network" },
    { id: "load-balancer", name: "Load Balancer", icon: "⚖️", category: "networking", type: "load-balancer" },
    {
      id: "application-gateway",
      name: "Application Gateway",
      icon: "🚪",
      category: "networking",
      type: "application-gateway",
    },
    { id: "vpn-gateway", name: "VPN Gateway", icon: "🔒", category: "networking", type: "vpn-gateway" },
    { id: "dns", name: "DNS", icon: "📡", category: "networking", type: "dns" },
    { id: "cdn", name: "Content Delivery Network", icon: "🌍", category: "networking", type: "cdn" },
    { id: "traffic-manager", name: "Traffic Manager", icon: "🚦", category: "networking", type: "traffic-manager" },
    { id: "expressroute", name: "ExpressRoute", icon: "🔌", category: "networking", type: "expressroute" },
    { id: "firewall", name: "Firewall", icon: "🔥", category: "networking", type: "firewall" },
    { id: "ddos-protection", name: "DDoS Protection", icon: "🛡️", category: "networking", type: "ddos-protection" },

    // AI + Machine Learning
    { id: "machine-learning", name: "Machine Learning", icon: "🧠", category: "ai", type: "machine-learning" },
    { id: "cognitive-services", name: "Cognitive Services", icon: "🧠", category: "ai", type: "cognitive-services" },
    { id: "bot-service", name: "Bot Service", icon: "🤖", category: "ai", type: "bot-service" },
    { id: "cognitive-search", name: "Cognitive Search", icon: "🔍", category: "ai", type: "cognitive-search" },
    { id: "genomics", name: "Genomics", icon: "🧬", category: "ai", type: "genomics" },
    { id: "openai", name: "Azure OpenAI Service", icon: "🤖", category: "ai", type: "openai" },

    // Analytics
    { id: "hdinsight", name: "HDInsight", icon: "📊", category: "analytics", type: "hdinsight" },
    {
      id: "synapse-analytics",
      name: "Synapse Analytics",
      icon: "📊",
      category: "analytics",
      type: "synapse-analytics",
    },
    {
      id: "data-lake-analytics",
      name: "Data Lake Analytics",
      icon: "📊",
      category: "analytics",
      type: "data-lake-analytics",
    },
    {
      id: "data-lake-storage",
      name: "Data Lake Storage",
      icon: "💾",
      category: "analytics",
      type: "data-lake-storage",
    },
    { id: "data-factory", name: "Data Factory", icon: "🏭", category: "analytics", type: "data-factory" },
    { id: "databricks", name: "Databricks", icon: "⚡", category: "analytics", type: "databricks" },
    { id: "stream-analytics", name: "Stream Analytics", icon: "📊", category: "analytics", type: "stream-analytics" },
    {
      id: "analysis-services",
      name: "Analysis Services",
      icon: "📊",
      category: "analytics",
      type: "analysis-services",
    },
    { id: "event-hubs", name: "Event Hubs", icon: "📡", category: "analytics", type: "event-hubs" },
    { id: "power-bi", name: "Power BI Embedded", icon: "📊", category: "analytics", type: "power-bi" },

    // Web
    { id: "app-service-web", name: "App Service (Web Apps)", icon: "🌐", category: "web", type: "app-service-web" },
    { id: "static-web-apps", name: "Static Web Apps", icon: "🌐", category: "web", type: "static-web-apps" },
    { id: "api-management", name: "API Management", icon: "🔌", category: "web", type: "api-management" },
    { id: "notification-hubs", name: "Notification Hubs", icon: "🔔", category: "web", type: "notification-hubs" },

    // IoT
    { id: "iot-hub", name: "IoT Hub", icon: "📡", category: "iot", type: "iot-hub" },
    { id: "iot-central", name: "IoT Central", icon: "📡", category: "iot", type: "iot-central" },
    { id: "iot-edge", name: "IoT Edge", icon: "📡", category: "iot", type: "iot-edge" },
    {
      id: "time-series-insights",
      name: "Time Series Insights",
      icon: "⏱️",
      category: "iot",
      type: "time-series-insights",
    },
    { id: "digital-twins", name: "Digital Twins", icon: "👥", category: "iot", type: "digital-twins" },
    { id: "sphere", name: "Sphere", icon: "🔮", category: "iot", type: "sphere" },

    // Integration
    { id: "logic-apps", name: "Logic Apps", icon: "🔄", category: "integration", type: "logic-apps" },
    { id: "service-bus", name: "Service Bus", icon: "🚌", category: "integration", type: "service-bus" },
    { id: "api-for-fhir", name: "API for FHIR", icon: "🏥", category: "integration", type: "api-for-fhir" },
    { id: "event-grid", name: "Event Grid", icon: "📡", category: "integration", type: "event-grid" },

    // Identity
    { id: "active-directory", name: "Active Directory", icon: "👤", category: "identity", type: "active-directory" },
    {
      id: "active-directory-b2c",
      name: "Active Directory B2C",
      icon: "👥",
      category: "identity",
      type: "active-directory-b2c",
    },
    {
      id: "active-directory-domain",
      name: "Active Directory Domain Services",
      icon: "🔑",
      category: "identity",
      type: "active-directory-domain",
    },

    // Security
    { id: "key-vault", name: "Key Vault", icon: "🔑", category: "security", type: "key-vault" },
    { id: "security-center", name: "Security Center", icon: "🛡️", category: "security", type: "security-center" },
    { id: "sentinel", name: "Sentinel", icon: "👁️", category: "security", type: "sentinel" },
    {
      id: "information-protection",
      name: "Information Protection",
      icon: "🔒",
      category: "security",
      type: "information-protection",
    },
    { id: "dedicated-hsm", name: "Dedicated HSM", icon: "🔐", category: "security", type: "dedicated-hsm" },
    {
      id: "application-security",
      name: "Application Security Groups",
      icon: "🔒",
      category: "security",
      type: "application-security",
    },

    // DevOps
    { id: "devops", name: "Azure DevOps", icon: "🔄", category: "devops", type: "devops" },
    { id: "devtest-labs", name: "DevTest Labs", icon: "🧪", category: "devops", type: "devtest-labs" },
    { id: "lab-services", name: "Lab Services", icon: "🧪", category: "devops", type: "lab-services" },

    // Migration
    { id: "azure-migrate", name: "Azure Migrate", icon: "☁️", category: "migration", type: "azure-migrate" },
    { id: "site-recovery", name: "Azure Site Recovery", icon: "🔄", category: "migration", type: "site-recovery" },
    { id: "db-migration-classic", name: "Azure Database Migration Service (classic)", icon: "🗄️", category: "migration", type: "db-migration-classic" },
    { id: "cost-management", name: "Azure Cost Management and Billing", icon: "💲", category: "migration", type: "cost-management" },

    // Mixed Reality
    { id: "remote-rendering", name: "Azure Remote Rendering", icon: "🅰️", category: "mixed-reality", type: "remote-rendering" },
    { id: "digital-twins", name: "Azure Digital Twins", icon: "🧑‍🤝‍🧑", category: "mixed-reality", type: "digital-twins" },

    // Hybrid + multicloud
    { id: "sentinel", name: "Microsoft Sentinel", icon: "🛡️", category: "hybrid-multicloud", type: "sentinel" },
    { id: "expressroute", name: "Azure ExpressRoute", icon: "🔌", category: "hybrid-multicloud", type: "expressroute" },
    { id: "entra-id", name: "Microsoft Entra ID (formerly Azure AD)", icon: "🅰️", category: "hybrid-multicloud", type: "entra-id" },
    { id: "sql-database", name: "Azure SQL Database", icon: "🗄️", category: "hybrid-multicloud", type: "sql-database-hybrid" },
    { id: "devops", name: "Azure DevOps", icon: "🛠️", category: "hybrid-multicloud", type: "devops-hybrid" },
    { id: "postgresql", name: "Azure Database for PostgreSQL", icon: "🐘", category: "hybrid-multicloud", type: "postgresql-hybrid" },
    { id: "iot-edge", name: "Azure IoT Edge", icon: "📡", category: "hybrid-multicloud", type: "iot-edge" },
    { id: "aks-stack-hci", name: "Azure Kubernetes Service on Azure Stack HCI", icon: "🅰️", category: "hybrid-multicloud", type: "aks-stack-hci" },
    { id: "arc", name: "Azure Arc", icon: "📚", category: "hybrid-multicloud", type: "arc" },
  ],
}

// Azure pricing data
export const azurePricing = {
  // Common data
  regions: [
    { id: "eastus", name: "East US" },
    { id: "westus", name: "West US" },
    { id: "centralus", name: "Central US" },
    { id: "northeurope", name: "North Europe" },
    { id: "westeurope", name: "West Europe" },
    { id: "eastasia", name: "East Asia" },
    { id: "southeastasia", name: "Southeast Asia" },
    { id: "japaneast", name: "Japan East" },
    { id: "japanwest", name: "Japan West" },
    { id: "australiaeast", name: "Australia East" },
    { id: "australiasoutheast", name: "Australia Southeast" },
    { id: "southindia", name: "South India" },
    { id: "centralindia", name: "Central India" },
    { id: "westindia", name: "West India" },
    { id: "canadacentral", name: "Canada Central" },
    { id: "canadaeast", name: "Canada East" },
    { id: "uksouth", name: "UK South" },
    { id: "ukwest", name: "UK West" },
    { id: "koreacentral", name: "Korea Central" },
    { id: "koreasouth", name: "Korea South" },
    { id: "francecentral", name: "France Central" },
    { id: "francesouth", name: "France South" },
    { id: "australiacentral", name: "Australia Central" },
    { id: "australiacentral2", name: "Australia Central 2" },
    { id: "uaecentral", name: "UAE Central" },
    { id: "uaenorth", name: "UAE North" },
    { id: "southafricanorth", name: "South Africa North" },
    { id: "southafricawest", name: "South Africa West" },
    { id: "switzerlandnorth", name: "Switzerland North" },
    { id: "switzerlandwest", name: "Switzerland West" },
    { id: "germanynorth", name: "Germany North" },
    { id: "germanywestcentral", name: "Germany West Central" },
    { id: "norwayeast", name: "Norway East" },
    { id: "norwaywest", name: "Norway West" },
    { id: "brazilsouth", name: "Brazil South" },
    { id: "brazilsoutheast", name: "Brazil Southeast" },
  ],

  // Virtual Machines
  vm: {
    basePrice: 0.0104,
    hasSizes: true,
    hasOS: true,
    hasHours: true,
    defaultConfig: {
      region: "eastus",
      size: "b1s",
      os: "linux",
      quantity: 1,
      hours: 24,
    },
    osOptions: [
      { id: "windows", name: "Windows" },
      { id: "linux", name: "Linux" },
    ],
    sizes: {
      b1s: { name: "B1s (1 vCPU, 1 GiB RAM)", price: 0.0104 },
      b2s: { name: "B2s (2 vCPU, 4 GiB RAM)", price: 0.0416 },
      b2ms: { name: "B2ms (2 vCPU, 8 GiB RAM)", price: 0.0832 },
      b4ms: { name: "B4ms (4 vCPU, 16 GiB RAM)", price: 0.1664 },
      b8ms: { name: "B8ms (8 vCPU, 32 GiB RAM)", price: 0.3328 },
      d2sv3: { name: "D2s v3 (2 vCPU, 8 GiB RAM)", price: 0.0912 },
      d4sv3: { name: "D4s v3 (4 vCPU, 16 GiB RAM)", price: 0.1824 },
      d8sv3: { name: "D8s v3 (8 vCPU, 32 GiB RAM)", price: 0.3648 },
      d16sv3: { name: "D16s v3 (16 vCPU, 64 GiB RAM)", price: 0.7296 },
      d32sv3: { name: "D32s v3 (32 vCPU, 128 GiB RAM)", price: 1.4592 },
      d64sv3: { name: "D64s v3 (64 vCPU, 256 GiB RAM)", price: 2.9184 },
      e2sv3: { name: "E2s v3 (2 vCPU, 16 GiB RAM)", price: 0.1196 },
      e4sv3: { name: "E4s v3 (4 vCPU, 32 GiB RAM)", price: 0.2392 },
      e8sv3: { name: "E8s v3 (8 vCPU, 64 GiB RAM)", price: 0.4784 },
      e16sv3: { name: "E16s v3 (16 vCPU, 128 GiB RAM)", price: 0.9568 },
      e32sv3: { name: "E32s v3 (32 vCPU, 256 GiB RAM)", price: 1.9136 },
      e64sv3: { name: "E64s v3 (64 vCPU, 432 GiB RAM)", price: 3.8272 },
      f2s: { name: "F2s (2 vCPU, 4 GiB RAM)", price: 0.0998 },
      f4s: { name: "F4s (4 vCPU, 8 GiB RAM)", price: 0.1996 },
      f8s: { name: "F8s (8 vCPU, 16 GiB RAM)", price: 0.3992 },
      f16s: { name: "F16s (16 vCPU, 32 GiB RAM)", price: 0.7984 },
    },
    hasOptions: true,
    options: {
      backup: { name: "Enable Backup", price: 5.0 },
      monitoring: { name: "Advanced Monitoring", price: 10.0 },
      "managed-disks": { name: "Managed Disks", price: 5.0 },
    },
  },

  // Virtual Machine Scale Sets
  vmss: {
    basePrice: 0.0104,
    hasSizes: true,
    hasOS: true,
    hasHours: true,
    defaultConfig: {
      region: "eastus",
      size: "b1s",
      os: "linux",
      quantity: 2,
      hours: 24,
    },
    osOptions: [
      { id: "windows", name: "Windows" },
      { id: "linux", name: "Linux" },
    ],
    sizes: {
      b1s: { name: "B1s (1 vCPU, 1 GiB RAM)", price: 0.0104 },
      b2s: { name: "B2s (2 vCPU, 4 GiB RAM)", price: 0.0416 },
      b2ms: { name: "B2ms (2 vCPU, 8 GiB RAM)", price: 0.0832 },
      b4ms: { name: "B4ms (4 vCPU, 16 GiB RAM)", price: 0.1664 },
      b8ms: { name: "B8ms (8 vCPU, 32 GiB RAM)", price: 0.3328 },
      d2sv3: { name: "D2s v3 (2 vCPU, 8 GiB RAM)", price: 0.0912 },
      d4sv3: { name: "D4s v3 (4 vCPU, 16 GiB RAM)", price: 0.1824 },
      d8sv3: { name: "D8s v3 (8 vCPU, 32 GiB RAM)", price: 0.3648 },
      d16sv3: { name: "D16s v3 (16 vCPU, 64 GiB RAM)", price: 0.7296 },
    },
    hasOptions: true,
    options: {
      autoscaling: { name: "Autoscaling", price: 0.01 },
      "load-balancer": { name: "Load Balancer", price: 18.25 },
    },
  },

  // Azure Kubernetes Service
  aks: {
    basePrice: 0.1,
    hasSizes: true,
    hasHours: true,
    defaultConfig: {
      region: "eastus",
      size: "b2s",
      quantity: 3,
      hours: 24,
    },
    sizes: {
      b2s: { name: "B2s (2 vCPU, 4 GiB RAM)", price: 0.0416 },
      b4ms: { name: "B4ms (4 vCPU, 16 GiB RAM)", price: 0.1664 },
      d2sv3: { name: "D2s v3 (2 vCPU, 8 GiB RAM)", price: 0.0912 },
      d4sv3: { name: "D4s v3 (4 vCPU, 16 GiB RAM)", price: 0.1824 },
      d8sv3: { name: "D8s v3 (8 vCPU, 32 GiB RAM)", price: 0.3648 },
    },
    hasOptions: true,
    options: {
      monitoring: { name: "Container Insights", price: 15.0 },
      "uptime-sla": { name: "Uptime SLA", price: 100.0 },
    },
  },

  // Functions
  functions: {
    basePrice: 0.000016,
    hasTiers: true,
    defaultConfig: {
      region: "eastus",
      tier: "consumption",
      quantity: 1000000,
    },
    tiers: {
      consumption: { name: "Consumption Plan", price: 0.000016 },
      premium: { name: "Premium Plan", price: 0.173 },
      dedicated: { name: "App Service Plan", price: 0.1 },
    },
    hasOptions: true,
    options: {
      storage: { name: "Storage (per GB)", price: 0.1 },
    },
  },

  // App Service
  "app-service": {
    basePrice: 0.1,
    hasTiers: true,
    hasHours: true,
    defaultConfig: {
      region: "eastus",
      tier: "basic",
      quantity: 1,
      hours: 24,
    },
    tiers: {
      free: { name: "Free", price: 0.01 }, // Changed from 0.0 to 0.01
      shared: { name: "Shared", price: 0.013 },
      basic: { name: "Basic Small", price: 0.075 },
      standard: { name: "Standard Small", price: 0.1 },
      premium: { name: "Premium Small", price: 0.2 },
      isolated: { name: "Isolated Small", price: 0.4 },
    },
    hasOptions: true,
    options: {
      ssl: { name: "SSL Certificate", price: 69.99 },
      "custom-domain": { name: "Custom Domain", price: 0.99 }, // Changed from 0.0 to 0.99
    },
  },

  // SQL Database
  "sql-database": {
    basePrice: 0.017,
    hasTiers: true,
    defaultConfig: {
      region: "eastus",
      tier: "basic",
      storage: 5,
    },
    tiers: {
      basic: { name: "Basic", price: 0.017 },
      standard: { name: "Standard", price: 0.1452 },
      premium: { name: "Premium", price: 0.5519 },
      "general-purpose": { name: "General Purpose", price: 0.26 },
      "business-critical": { name: "Business Critical", price: 0.5 },
      hyperscale: { name: "Hyperscale", price: 0.4 },
    },
    hasStorage: true,
    storage: {
      price: 0.115, // per GB
    },
    hasOptions: true,
    options: {
      backup: { name: "Long-term Backup", price: 0.05 },
      "geo-replication": { name: "Geo-Replication", price: 0.15 },
    },
  },

  // Cosmos DB
  "cosmos-db": {
    basePrice: 0.008,
    hasTiers: true,
    defaultConfig: {
      region: "eastus",
      tier: "standard",
      storage: 10,
    },
    tiers: {
      standard: { name: "Standard", price: 0.008 },
      autoscale: { name: "Autoscale", price: 0.012 },
    },
    hasStorage: true,
    storage: {
      price: 0.25, // per GB
    },
    hasOptions: true,
    options: {
      "multi-region": { name: "Multi-region Writes", price: 0.016 },
      backup: { name: "Continuous Backup", price: 0.2 },
    },
  },

  // Blob Storage
  "blob-storage": {
    basePrice: 0.0184,
    hasTiers: true,
    defaultConfig: {
      region: "eastus",
      tier: "hot",
      storage: 100,
    },
    tiers: {
      hot: { name: "Hot", price: 0.0184 },
      cool: { name: "Cool", price: 0.01 },
      archive: { name: "Archive", price: 0.00099 },
      premium: { name: "Premium", price: 0.15 },
    },
    hasStorage: true,
    storage: {
      price: 0.0184, // per GB
    },
    hasBandwidth: true,
    bandwidth: {
      price: 0.01, // per GB
    },
    hasOptions: true,
    options: {
      redundancy: { name: "Geo-redundant storage", price: 0.0368 },
    },
  },

  // Virtual Network
  "virtual-network": {
    basePrice: 0.01, // Changed from 0.0 to 0.01
    defaultConfig: {
      region: "eastus",
      quantity: 1,
    },
    hasOptions: true,
    options: {
      "ip-addresses": { name: "IP Addresses", price: 0.004 },
      peering: { name: "VNet Peering", price: 0.01 },
      "nat-gateway": { name: "NAT Gateway", price: 0.045 },
    },
  },

  // Load Balancer
  "load-balancer": {
    basePrice: 0.0225,
    hasTiers: true,
    defaultConfig: {
      region: "eastus",
      tier: "basic",
      quantity: 1,
    },
    tiers: {
      basic: { name: "Basic", price: 0.01 }, // Changed from 0.0 to 0.01
      standard: { name: "Standard", price: 0.0225 },
    },
    hasOptions: true,
    options: {
      rules: { name: "Rules (per rule)", price: 0.005 },
      outbound: { name: "Outbound Rules", price: 0.005 },
    },
  },

  // Machine Learning
  "machine-learning": {
    basePrice: 0.01, // Changed from 0.0 to 0.01
    hasTiers: true,
    defaultConfig: {
      region: "eastus",
      tier: "basic",
      quantity: 1,
    },
    tiers: {
      basic: { name: "Basic", price: 0.01 }, // Changed from 0.0 to 0.01
      enterprise: { name: "Enterprise", price: 100.0 },
    },
    hasOptions: true,
    options: {
      compute: { name: "Compute (per hour)", price: 0.5 },
      storage: { name: "Storage (per GB)", price: 0.1 },
    },
  },

  // Cognitive Services
  "cognitive-services": {
    basePrice: 0.01, // Changed from 0.0 to 0.01
    hasTiers: true,
    defaultConfig: {
      region: "eastus",
      tier: "free",
      quantity: 1,
    },
    tiers: {
      free: { name: "Free", price: 0.01 }, // Changed from 0.0 to 0.01
      standard: { name: "Standard", price: 1.0 },
      premium: { name: "Premium", price: 10.0 },
    },
    hasOptions: true,
    options: {
      transactions: { name: "Transactions (per 1000)", price: 1.5 },
    },
  },

  // Key Vault
  "key-vault": {
    basePrice: 0.03,
    hasTiers: true,
    defaultConfig: {
      region: "eastus",
      tier: "standard",
      quantity: 1,
    },
    tiers: {
      standard: { name: "Standard", price: 0.03 },
      premium: { name: "Premium", price: 0.1 },
    },
    hasOptions: true,
    options: {
      operations: { name: "Operations (per 10,000)", price: 0.03 },
      certificates: { name: "Certificate Operations", price: 3.0 },
    },
  },

  // File Storage
  "file-storage": {
    basePrice: 0.06,
    hasTiers: true,
    defaultConfig: {
      region: "eastus",
      tier: "standard",
      storage: 100,
    },
    tiers: {
      standard: { name: "Standard", price: 0.06 },
      premium: { name: "Premium", price: 0.15 },
    },
    hasStorage: true,
    storage: {
      price: 0.06, // per GB
    },
    hasOptions: true,
    options: {
      snapshots: { name: "Snapshots", price: 0.01 },
      "geo-replication": { name: "Geo-Replication", price: 0.12 },
    },
  },

  // API Management
  "api-management": {
    basePrice: 0.04,
    hasTiers: true,
    defaultConfig: {
      region: "eastus",
      tier: "developer",
      quantity: 1,
    },
    tiers: {
      developer: { name: "Developer", price: 0.04 },
      basic: { name: "Basic", price: 0.15 },
      standard: { name: "Standard", price: 0.35 },
      premium: { name: "Premium", price: 2.5 },
    },
    hasOptions: true,
    options: {
      "additional-units": { name: "Additional Units", price: 0.35 },
      "self-hosted-gateway": { name: "Self-hosted Gateway", price: 0.25 },
    },
  },

  // IoT Hub
  "iot-hub": {
    basePrice: 0.025,
    hasTiers: true,
    defaultConfig: {
      region: "eastus",
      tier: "basic",
      quantity: 1,
    },
    tiers: {
      free: { name: "Free", price: 0.01 }, // Changed from 0.0 to 0.01
      basic: { name: "Basic", price: 0.025 },
      standard: { name: "Standard", price: 0.05 },
    },
    hasOptions: true,
    options: {
      "device-provisioning": { name: "Device Provisioning", price: 0.01 },
      "message-routing": { name: "Message Routing", price: 0.05 },
    },
  },

  // Logic Apps
  "logic-apps": {
    basePrice: 0.0008,
    hasTiers: true,
    defaultConfig: {
      region: "eastus",
      tier: "consumption",
      quantity: 1000,
    },
    tiers: {
      consumption: { name: "Consumption", price: 0.0008 },
      standard: { name: "Standard", price: 0.1 },
    },
    hasOptions: true,
    options: {
      "enterprise-connectors": { name: "Enterprise Connectors", price: 0.001 },
      "b2b-integration": { name: "B2B Integration", price: 0.09 },
    },
  },

  // Active Directory
  "active-directory": {
    basePrice: 0.01, // Changed from 0.0 to 0.01
    hasTiers: true,
    defaultConfig: {
      region: "global",
      tier: "free",
      quantity: 1,
    },
    tiers: {
      free: { name: "Free", price: 0.01 }, // Changed from 0.0 to 0.01
      basic: { name: "Basic", price: 1.0 },
      premium: { name: "Premium P1", price: 6.0 },
      "premium-p2": { name: "Premium P2", price: 9.0 },
    },
    hasOptions: true,
    options: {
      mfa: { name: "Multi-Factor Authentication", price: 1.4 },
      "conditional-access": { name: "Conditional Access", price: 2.0 },
    },
  },

  // Security Center
  "security-center": {
    basePrice: 0.02,
    hasTiers: true,
    defaultConfig: {
      region: "global",
      tier: "standard",
      quantity: 10,
    },
    tiers: {
      free: { name: "Free", price: 0.01 }, // Changed from 0.0 to 0.01
      standard: { name: "Standard", price: 0.02 },
    },
    hasOptions: true,
    options: {
      "vulnerability-assessment": { name: "Vulnerability Assessment", price: 0.05 },
      "threat-protection": { name: "Threat Protection", price: 0.15 },
    },
  },

  // Azure DevOps
  devops: {
    basePrice: 0.01, // Changed from 0.0 to 0.01
    hasTiers: true,
    defaultConfig: {
      region: "global",
      tier: "basic",
      quantity: 5,
    },
    tiers: {
      basic: { name: "Basic", price: 0.01 }, // Changed from 0.0 to 0.01
      "basic-plus-test": { name: "Basic + Test Plans", price: 6.0 },
      "basic-plus-artifacts": { name: "Basic + Artifacts", price: 4.0 },
    },
    hasOptions: true,
    options: {
      pipelines: { name: "Pipelines (per parallel job)", price: 40.0 },
      "self-hosted-agents": { name: "Self-hosted Agents", price: 15.0 },
    },
  },

  // Migration
  "azure-migrate": { basePrice: 0.05, defaultConfig: { region: 'eastus', quantity: 1 } },
  "site-recovery": { basePrice: 0.10, defaultConfig: { region: 'eastus', quantity: 1 } },
  "db-migration-classic": { basePrice: 0.15, defaultConfig: { region: 'eastus', quantity: 1 } },
  "cost-management": { basePrice: 0.10, defaultConfig: { region: 'eastus', quantity: 1 } },

  // Mixed Reality
  "remote-rendering": { basePrice: 0.05, defaultConfig: { region: 'eastus', quantity: 1 } },
  "digital-twins": { basePrice: 0.10, defaultConfig: { region: 'eastus', quantity: 1 } },

  // Hybrid + multicloud
  "sentinel": { basePrice: 0.05, defaultConfig: { region: 'eastus', quantity: 1 } },
  "expressroute": { basePrice: 0.10, defaultConfig: { region: 'eastus', quantity: 1 } },
  "entra-id": { basePrice: 0.10, defaultConfig: { region: 'eastus', quantity: 1 } },
  "sql-database-hybrid": { basePrice: 0.10, defaultConfig: { region: 'eastus', quantity: 1 } },
  "devops-hybrid": { basePrice: 0.10, defaultConfig: { region: 'eastus', quantity: 1 } },
  "postgresql-hybrid": { basePrice: 0.10, defaultConfig: { region: 'eastus', quantity: 1 } },
  "iot-edge": { basePrice: 0.10, defaultConfig: { region: 'eastus', quantity: 1 } },
  "aks-stack-hci": { basePrice: 0.10, defaultConfig: { region: 'eastus', quantity: 1 } },
  "arc": { basePrice: 0.10, defaultConfig: { region: 'eastus', quantity: 1 } },
}
