# cs370-term-project
CS370 - Team 39 term project, Fall 2020
| **Name** | EID |
| ------------ |  ------------  |
| Williams, Sara | soraiku |
| Alowairdhi, Raghd | raghd |
| May, Tanner | tannerjm |

## Description
### What’s for Dinner? 
Nearly everyone has asked themselves the question “what should I have for dinner tonight?” and struggled to come up with an answer. It may be tempting to grab takeout or fast food in such a situation, but sometimes our budgets just don’t allow for that. We want to create a website that will generate a list of suggested recipes based on the ingredients the user indicates they have on hand. 

A containerized architecture would work well for this project, because, like most websites, ours will have a server, a database, and a client-side. Instead of having to configure each of these on every individual system, we can use Docker to containerize the application. Among our team, we have a Windows user, a Mac user, and a Linux user. It will be crucial to use Docker to make sure we are not running into configuration issues as we build this site, so we can avoid the ever frustrating “well, it works on my machine” problem. 

## Usage
### TP-D2 Information
The web server was created using Java Spark. The POST request path is: http://localhost:8080/

## Docker
### After setting Dockerfile : 

### Dockerfile:
### Build Image:

Build Docker image:
* `docker build --tag cs370-project` 

### Run Image: 

To run  our image: 
* `docker run cs370-project`

Our server runs on: http://localhost:3000

### Other Commands 
- `docker images` shows a list of docker images
- `docker ps` shows the current process, and whether something runs correctly 
- `docker ps -a`shows your every thing.
- `docker start cs370-project`start the project in the system 
- `docker stop` stop the project


