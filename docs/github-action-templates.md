---
title: GitHub Action Templates for Faster CI Setup
slug: github-action-templates
---

If your project is on GitHub, GitHub Actions are a great built in way to have an automated Continuous Integration (CI) setup where the configuration is committed to the same repository where your project lives.

GitHub Actions are also very cost effective thanks to the generous free minutes allowance and additional 3000/month minutes with every paid team member. 

To make taking advantage of GitHub Actions with your ServiceStack applications, we've created multiple `mix` templates to have your CI process setup quickly. Templates provide a build + test step on every commit as well as combinations of Docker image hosting and application deployments focused on portability over scalability. 

Since hosting architectures can vary so much, these templates are designed to get you *started* with a simple setup where you can iterate quickly while prototyping your application. As your hosting needs change, the GitHub Actions specifics around deployment can be altered in the provided GitHub Action workflow `yml` files.

The simple build and test step is available using the `mix` name of `build`, while the deployment `mix` templates use the naming convension `release-{docker image repository}-{hosting configuration}`. For example, `release-ghr-vanilla` where `ghr` uses GitHub for the Docker Repository and `vanilla` for our minimalist deployment that uses SSH and `docker-compose`.

Templates currently available are:

<table style="width:100%">
  <thead>
    <tr>
      <th>Name</th>
      <th style="text-align: center">Docker Repository</th>
      <th style="text-align: right">Deployment and Hosting</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">release-ghr-vanilla</code></td>
      <td style="text-align: center">GitHub Container Repository</td>
      <td style="text-align: right">SSH + <code class="language-plaintext highlighter-rouge">docker-compose</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">release-ecr-vanilla</code></td>
      <td style="text-align: center">AWS Elastic Container Repository</td>
      <td style="text-align: right">SSH + <code class="language-plaintext highlighter-rouge">docker-compose</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">release-hub-vanilla</code></td>
      <td style="text-align: center">Docker Hub</td>
      <td style="text-align: right">SSH + <code class="language-plaintext highlighter-rouge">docker-compose</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">release-ecr-aws</code></td>
      <td style="text-align: center">AWS Elastic Container Repository</td>
      <td style="text-align: right">AWS ECS without Application Load Balancer</td>
    </tr>
  </tbody>
</table>


### release-ghr-vanilla
Using GitHub Container Repository (ghcr.io) and deploying to a Linux host with `docker-compose` via SSH, this provides a GitHub centric option for prototyping your application. A [full tutorial using Digital Ocean as our Linux host provider is available](https://docs.servicestack.net/do-github-action-mix-deployment) as well as an accompanying video.

> YouTube: [youtu.be/0PvzcnxlBvc](https://youtu.be/0PvzcnxlBvc)

[![](https://i.ytimg.com/vi/0PvzcnxlBvc/maxresdefault.jpg)](https://youtu.be/0PvzcnxlBvc)

Also, a [shorter reference documentation](https://github.com/ServiceStack/mix/blob/master/actions/release-ghr-vanilla/.github/workflows/README.md) that comes with the template when using `mix` available that lists the setup as well as the required [GitHub Repository](https://github.com/ServiceStack/mix/blob/master/actions/release-ghr-vanilla/.github/workflows/README.md#github-repository-setup) Secrets for configuration.

### release-ecr-vanilla
Using AWS ECR (Elastic Container Repository) and deploying to a Linux host with `docker-compose` via SSH, this provides a portable simple hosting with AWS ECR for those already in the AWS cloud provider environment.

Reference for this GitHub Action configuration is provided with the template itself, also [available here](https://github.com/ServiceStack/mix/blob/master/actions/release-ecr-vanilla/.github/workflows/README.md) along with the [required Repository Secrets](https://github.com/ServiceStack/mix/blob/master/actions/release-ecr-vanilla/.github/workflows/README.md#github-repository-setup).

### release-hub-vanilla
Using the original Docker Hub as an Docker image repository and deploying to a Linux host with `docker-compose` via SSH, this might be more suited to those with existing use of Docker Hub or public application images.

Reference for this GitHub Action configuration is provided with the template itself, [also available on GitHub](https://github.com/ServiceStack/mix/blob/master/actions/release-hub-vanilla/.github/workflows/README.md) here along with the [required Repository Secrets](https://github.com/ServiceStack/mix/blob/master/actions/release-hub-vanilla/.github/workflows/README.md#github-repository-setup).

### release-ecr-aws
Using AWS ECR (Elastic Container Repository) and deploying via AWS ECS to a dedicated ECS cluster with a single EC2 instance, this template enables a gateway into using AWS ECS without the regular cost of an Application Load Balancer (ALB). Like the other templates, this uses NGINX proxy with Lets Encrypt companion in place of AWS specific managed services to do the same. This will give you a starting point for your prototype until you have the need for scalability and high availability for your application.

We have a full tutorial along with a video walk through available, showing from start to finish getting your ServiceStack application created and deploying via GitHub Actions and ECS. 

> YouTube: [youtu.be/Eh4tvLN8i8g](https://youtu.be/Eh4tvLN8i8g)

[![](https://i.ytimg.com/vi/Eh4tvLN8i8g/maxresdefault.jpg)](https://youtu.be/Eh4tvLN8i8g)

Reference for this GitHub Action configuration is provided with the template itself, [also available on GitHub](https://github.com/ServiceStack/mix/blob/master/actions/release-ecr-aws/.github/workflows/README.md) here along with the [required Repository Secrets](https://github.com/ServiceStack/mix/blob/master/actions/release-ecr-aws/.github/workflows/README.md#github-repository-setup).

