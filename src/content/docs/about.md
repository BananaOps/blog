---
title: About
template: splash

lastUpdated: 2026-09-11
head:
  - tag: style
    content: |
      .hero-bg { display: none !important; }
      .content-panel { max-width: 70rem !important; margin: auto; padding:1.5rem 0px !important; }
      #_top{
      text-align: center;
      font-size: 4rem;
      padding-bottom: 3rem;
      }
---

## Who we are

BananaOps is an open community of engineers working on cloud infrastructure,
scaling and microservices. We build the tools we need to run platforms, in the
open, and we document them next to the source.

## What we build

Every project is written for people who operate platforms day to day, released
under an open source licence, and published with its container image and — where
it makes sense — its Helm chart.

| Project | What it does |
| --- | --- |
| [Tracker](/projects/tracker/) | Event tracking: deployments, incidents, drifts, service catalog, distributed locks |
| [Cloudoff](/projects/cloudoff/) | Scheduled shutdown of EC2 instances, driven by tags |
| [Scope](/projects/scope/) | Helm chart synchronisation to private OCI registries |
| [Homer-k8s](/projects/homer-k8s/) | Kubernetes controller generating a dynamic Homer dashboard |
| [Offly](/projects/offly/) | Self-hosted time-off manager |

## How we work

- **Open by default.** Sources, issues and discussions are public on GitHub.
- **Documented.** A tool nobody can install is a tool nobody uses.
- **Small and composable.** Each tool does one job and can be adopted on its own.

## Contributing

Contributions are welcome on every project — code, documentation, bug reports.
Start with the [contribution guide](/docs/contributing/) or open an issue on the
repository concerned.

- [GitHub organisation](https://github.com/BananaOps)
- [Docker Hub](https://hub.docker.com/u/bananaops)
