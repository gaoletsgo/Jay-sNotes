Cloud Computing
===

### Definition
* Cloud:  
  * A large group of connected computer servers.
  * Software, Platform an Infrustrature are provided as service.
* Cloud Computing is a computation paradigm, It is a pay-as-you-go model for enabling conveninet, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned and easily used with minimal interaction.
    #### Advantages: 
    * Low in cost
    * Improved compatibility, performance and reliability.
    * Universal access to data.
    * Easier for collaboration
    * Instant software update
    * Sevice independent.
    #### Limitations:
    * Required constant and high-speed internet connection.
    * Not as responsive as local applications.
    * Functions available might be limited
    * Limitation of Access.
    * Provacy issues.


### LaaS (Infrastructure as a service)

* a self-contained virtual environment consists of infrastructure-contric IT resources.
* IT resources can be accessed and managed via cloud service-based interfaces and tools.
* can include __hardware__, __network__, __connectivity__, __operating systems__ and other "raw" IT resources.
* provide a high level of control and responsibility over its configuration and utilization.
* needs cloud consumers' administrative responsibility.
* can be different by defferent cloud providers.
* is generally offered as freshly initialized virtual machines.
  
USERS: System admins.

\<three Delivery Models>:
### PaaS (Platform as a servie)

* a pre-defined "read-to-use" environment typically consists of already deployed and configured IT resources.
* can include a __programming language execution environment__, an __operating system__, a __web server__, and a __database__.
* encapsulates an environment where users can build, compile, and run program without worrying about the infrastructure.
* needs users to manage their own data.
* no need to take administrative and maintaining responsibility.
* lower level of control over the underlying IT resources.
  
USERS: developers.

### SaaS (Software as a service)

* a shared cloud service and made available as a "product".
* provides on-demand service.
* no installation of the software on users' PCs.
* assessible via a web browser or lightweight client apps.
* run a single instance of the software.
* can be available for multiple users.
* has very limited administrative control over a SaaS implementation.

USERS: end-users.

### Comparisons

SaaS: 
    
Control level:
* SaaS:  Usage and usage-related configuration.
* PaaS: Limited administrative.
* LaaS: Full administrative.

Functionality: 
* SaaS: access to front-end user-interface.
* PaaS: Moderate level of administrative control over IT resources relevant to cloud consumer's usage of platform.
* LaaS: Full access to virtualized infrastructure-related IT resources and possibly to underlying physical IT resources

Consumer Activities:
* SaaS: Users and configures cloud services.
* PaaS: Developers, tests, deploys, and manages cloud services and cloud-based solutions.
* LaaS: Sets up and configures bare infrastructure, and installs, manages, and monitors any needed software.
  
Provider Activities:

* SaaS: Implements, manages and matintains cloud service. Monitors usage by cloud consumers.
* PaaS: Pre-configures platform and provisions underlying infrastructure, middleware, and other needed IT resources, as necessary. Monitors usage by cloud consumers.
* LaaS: Provisions and manages the physical processing, storage, networking, and hosting required. Monitors usage by cloud consumers.
  
### MapReduce

is a computational model for procesing __huge datasets__ in parallel using large number of computers(nodes).

Input: a set of inout key/value pairs.   
Output: a set of outputs key/value pairs.
Two main functions:   
* Map: takes an input pair and produces a set of intermediate key/value.
* Reduce: takes an intermediate key and a set of values for the key and merges together these values to form a possibly smaller set of values.