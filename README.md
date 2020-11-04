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
For TP-D2, the POST request path is: http://localhost:8080/

## Docker
### After setting Dockerfile : 
Dockerfile path:
cs370-term-project/app/Dockerfile

### Dockerfile:
### command use to build & run broject:
* To use docker command you should be inside app directory. 

* `docker build --tag cs370-project .` Here docker start execute the command and writes our image based on those commands and name our image as "cs370-project"
* `docker run -p 8080:8080 --name cs370 -d cs370-project` Here we connect the container to the browser with port 8080.
* `docker run cs` runs the container.

Stop/remove the container:
* `docker stop cs370` stops the container.
* `docker rm cs370` remove the container.

### Commands use with the project : 

 When you do 

* `docker images` 

you can see cs370-project image build successfully.

To run image 

* `docker run cs370`

For now we are in a default prot http://localhost:8080
 

### Other command 
- `docker ps` shows the current process, and weather something run in the system 
- `docker ps -a`shows your every thing.
- `docker start cs370-project`start the project in the system 
- `docker stop` stop the project
- `curl http://localhost:8080` To check out the localhost connection.


