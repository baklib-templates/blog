# Baklib CMS — Blog theme

A lightweight **blog / news / announcements** theme for Baklib-powered sites. It ships with two home layouts (card grid and list), article pages with tags and optional feedback, search, and Tailwind CSS–based styling.

Template Git URL: https://github.com/baklib-templates/blog

---

## Features

Repository Layout

| Path                          | Purpose                                                         |
| ----------------------------- | --------------------------------------------------------------- |
| `templates/`                  | Page templates                                                  |
| `snippets/`                   | Partials / Snippets                                             |
| `layout/`                     | `theme.liquid` site shell                                       |
| `config/settings_schema.json` | Theme settings schema                                           |
| `locales/`                    | UI strings (`*.json`) and schema translations (`*.schema.json`) |
| `seeds/`                      | Sample site and pages (default **English**)                     |
| `assets/`                     | Built CSS/JS                                                    |
| `src/`                        | Source for Tailwind and JS                                      |

---

- **Home**: card grid (`templates/index.liquid`) or list (`templates/index.list.liquid`) with tag navigation and sorting (card layout).
- **Article** (`templates/page.liquid`): title, summary, cover, rich content, tags, version links, optional visit count and feedback.
- **Search** (`templates/search.liquid`), **tag listing** (`templates/tag.liquid`).
- Theme settings in `config/settings_schema.json`; storefront copy in `locales/*.json`; editor labels in `locales/*.schema.json`.

---

## Preview

|                Home (Cards)                 |              Cover (Thumbnail)               |
| :-----------------------------------------: | :------------------------------------------: |
|  ![Home](assets/images/theme/en/index.png)  |  ![Cover](assets/images/theme/en/cover.png)  |
|              **Article Page**               |              **Recent Updates**              |
| ![Article](assets/images/theme/en/page.png) | ![Recent](assets/images/theme/en/recent.png) |

---

## Installation

Find "Blog" in the Baklib template marketplace, click install, and it's done.

|                 1. Select and Install Theme                 |                    2. Basic Site Settings                    |               3. Home and Template Configuration               |
| :---------------------------------------------------------: | :----------------------------------------------------------: | :------------------------------------------------------------: |
| ![Install Theme](assets/images/guides/001_install-site.png) | ![Site Settings](assets/images/guides/002_site-settings.png) | ![Index Settings](assets/images/guides/003_index-settings.png) |

---

## Other Documents

- Chinese Overview: [README.zh-CN.md](./README.zh-CN.md)
- Theme Help: [www.baklib.ai/themes](https://www.baklib.ai/themes/blog)
