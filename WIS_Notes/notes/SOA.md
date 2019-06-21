Service Oriented Architecture
===

### Definition:

SOA is a style of software design where services are provided to the other components by application components, through a communication protocol over a network.

MVC is an architectural pattern commonly used for developing user interfaces that divides an application into three interconnected parts.

Services:  
is a function that is well-defined, self-contained and does not depend on the context or state of other services. 

is defined as a unit of work to be performed on behalf of some computing entity, such as a human user or another program.

### Web services:  
is a software application identified by a URI, whose interfaces and bindings are capable of being defined, described and discovered as XML artifacts. A web service supports direct interactions with other software agents using XML-based messages exchanged via Internet-based protocols.

(is self-contained, modular business applications that have open, internet-oriented, standards-based interfaces.)

#### architecture

![Web service architecture](https://www.w3.org/2003/Talks/0521-hh-wsa/Triangle.png)

**Provider**:  <u>creates</u> the web service and <u>makes it available to client applications</u>.

**Requester**:  The client application(which can be any language based) that <u>needs to contact a web service</u>.

**Registry**:  The service registry that <u>enables the client application to locate the web service</u>.

**Publish**:  When a service registry is used, a service provider **publishes** its service description in a **service registry** for the service requester to **find**.

Find:  When a service registry is used, a service requester finds the service description in the registry.

**Bind**:  The service requester uses the service description to bind with the service provider and interact with the web service implementation.

Commmunicate --> SOAP(simple object access protocol)   
>  SOAP:  is a messaging protocol specification for exchanging structured information in the implementation of web service in computer networks. It is a set of rules formalizing and governing the format and processing rules for information exchanged between a SOAP sender and a SOAP receiver.   
>
>SOAP messages exchanged on top of HTTP, SMTP, or other transport.
> A SOAP message is an ordinary XML document containing: **Envelope**, **Header**, **Body**, **Fault**.


Describe service  --> WSDL(Web services Description Language)   

> WSDL: Used for describeing the functionality offered by a web service. It providers machine-readable description of **how the service can be called**, **what parameters it expects**, and **what data structure it returns**.


Name and directiry server --> UDDI(Universal Description Discovery and Integration)

> UDDI:  is the specification of a framework for describing and discoverying web services. 
>
> UDDI specification defines a way to publish and discover information about web services. The core of UDDI is an XML-based registry for business internet services.   


Web service -- Key aspects:   
* service discovery:  
  * need to know what web services exist and where to find them.
  * UDDI repositiries.
* service description: 
  * Describe their interfaces in detail so that a client knows how to "consume" the functionality.
  * WSDL document.
* Standard protocol:
  * Transport: HTTP, SMTP, FTP...
  * Messaging: SOAP over HTTP, REST.
  * Description: WSDL.
  
### SOA(Service Oriented Architecture)

Service interface wraps the business logic and offers access of the logic, service interface is used to interact with other services and applications rather than human beings.

Service interfaces: service expose a service interface to which all inbound messages are sent. 

Message types: when exchanging data across the service layer, data structures are wrapped by message structures that support different types of operations. The services layer will also usually include data types and constracts that define the data types used in messages.

### Why SOA:
