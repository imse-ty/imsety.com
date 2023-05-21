# Changelog

## [Unreleased]

## [1.7.0] - 2023-05-21

### Added

- Cool scale animation when you hover a project.

### Changed

- Made project section wider.
- Rounded off some things.
- Swapped "Hey!" with "Greetings!"
- Changed front from Poppins to [Hubot Sans](https://github.com/github/hubot-sans).
- Centered hero images.

## [1.6.0] - 2022-07-30

### Added

- Ability to link to a particular heading in a project case study.

### Changed

- Switched from Yarn to npm.

## [1.5.0] - 2022-06-21

### Added

- Made a work page document inside Sanity Studio so that I can rearrange the order of projects. ([#65](https://github.com/imse-ty/imsety.com/issues/65))

### Fixed

- Bug where project case study tool tips do not show up even if one the fields exist.
- "developed my me" typo in the footer. Oops, that should have said "developed by me." Thanks, [M.SAM](https://samessanoussi.com/), for pointing this out!

## [1.4.0] - 2022-06-17

### Changed

- Made sure to only show case studies and blog posts that have a `publishedAt` date.
- The case study heading is now on the top for larger screens! I don't know why I had it like that before...
- Updated dependencies.

### Fixed

- Broken shadow showing up for Vimeo content that is not 16:9 by setting player's ["transparent" parameter](https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Player-parameters-overview) to false. ([#63](https://github.com/imse-ty/imsety.com/issues/63))

## [1.3.0] - 2022-05-04

### Added

- Gave the hero reel video a stand-in poster for users with slow internet.

### Changed

- Changed contact email from hello@imsety.com to greetings@imsety.com because it sounds cooler.
- Updated about page photo with a nicer color corrected one 🙂
- The header is now a bit shorter.

### Fixed

- About page content overflowing past the header on smaller screens. ([#61](https://github.com/imse-ty/imsety.com/issues/61))

## [1.2.1] - 2022-03-23

### Fixed

- Incorrect Instagram icon link. It went to [www.instagram.com/imse.ty](https://www.instagram.com/imse.ty/) instead of [www.instagram.com/imse_ty](https://www.instagram.com/imse_ty/). Oops... 🤦🏾‍♂️ ([#60](https://github.com/imse-ty/imsety.com/issues/60))

## [1.2.0] - 2022-03-23

### Added

- New about page photo :)

### Changed

- Blog and changelog pages now open links in new tab.

### Fixed

- Project entries not showing full Vimeo controls on mobile.
- `zoom-in` cursor showing up on blog post images.
- Project card content overflowing on smaller screens

## [1.1.0] - 2022-02-22

### Added

- New lightbox functionality for project entries using [Simple React Lightbox](https://github.com/michelecocuccio/simple-react-lightbox).
- A neat `PhotoGrid` component that lets me quickly make photo grids inside MDX.
- Going to [imsety.com/rebrand](https://imsety.com/rebrand) redirects you to the [Imsety 2022 rebrand case study](https://imsety.com/projects/2022-rebrand).

### Changed

- Made all of the regular paragraphs a regular `font-weight`. I realized the boldness was too distracting.
- Make "Reach out" button use Sentence case instead of Title Case.
- Change order of social media links

### Fixed

- "Work" header item not being active when viewing a project entry.
- Fixed project and blog header `line-heights` being too close.

### Security

- Upgraded to [Sanity 2.27.1](https://github.com/sanity-io/sanity/releases/tag/v2.27.1).

## [1.0.0] - 2022-02-19

First stable release 🥳🥳🎉

### Added

- Google Analytics. ([#45](https://github.com/imse-ty/imsety.com/issues/45))
- Changelog page for public release notes. ([#47](https://github.com/imse-ty/imsety.com/issues/47))
- Simple SEO for all pages. ([#51](https://github.com/imse-ty/imsety.com/issues/51))
- Proper content with real [blurbs](https://en.wikipedia.org/wiki/Blurb)! ([#52](https://github.com/imse-ty/imsety.com/issues/52))

### Changed

- Footer copyright notice thing has been updated from "2021" to "2022." ([#49](https://github.com/imse-ty/imsety.com/issues/49))
- Upgraded to Next.js 12. ([#53](https://github.com/imse-ty/imsety.com/issues/53))
- Projects on the home page are now sorted by date published. ([#52](https://github.com/imse-ty/imsety.com/issues/52))
- Made sure project entry info such as year, timeline, tools, and summary are hidden when not in use.
- `title` and `slug` for project entries and blog posts are now required.
- Updated default page description. ([#52](https://github.com/imse-ty/imsety.com/issues/52))
- Updated YouTube link to [www.youtube.com/imsety](https://www.youtube.com/imsety). ([#52](https://github.com/imse-ty/imsety.com/issues/52))

## [0.6.0] - 2022-01-29

### Added

- Project entry page. ([#36](https://github.com/imse-ty/imsety.com/issues/36))

## [0.5.0] - 2022-01-22

### Added

- Blog page with dynamic content from Sanity. ([#34](https://github.com/imse-ty/imsety.com/issues/34))
- Blog post pages with content from [Markdown](https://github.com/hashicorp/next-mdx-remote) and Sanity ([#35](https://github.com/imse-ty/imsety.com/issues/35))
- Ability to have see a live preview of a blog post. ([#35](https://github.com/imse-ty/imsety.com/issues/35))

### Changed

- Made default `font-size` a little bigger (1.125 `rem`). ([#37])
- Renamed the `project` URL directory to `projects`. ([#42])
- Changed `project` and `post` schema titles to "Projects" and "Posts" in the Sanity Studio. ([#42])

[#34]: https://github.com/imse-ty/imsety.com/issues/34
[#37]: https://github.com/imse-ty/imsety.com/issues/37
[#42]: https://github.com/imse-ty/imsety.com/issues/42

## [0.4.0] - 2021-06-18

### Changed

- New page container with set `max-width`. ([#21](https://github.com/imse-ty/imsety.com/issues/21))
- The Imsety wordmark now takes you to the Work page. ([#22](https://github.com/imse-ty/imsety.com/issues/22))
- Redesigned Work and Info page hero sections ([#26](https://github.com/imse-ty/imsety.com/issues/26))
- The header shadow now only shows up when you start scrolling. ([#29](https://github.com/imse-ty/imsety.com/issues/29))
- Renamed "Info" page to "About" page. ([#32](https://github.com/imse-ty/imsety.com/issues/32))

### Fixed

- Fixed unresponsive page behavior on smaller screens. ([#27](https://github.com/imse-ty/imsety.com/issues/27))

## [0.3.0] - 2021-06-12

### Added

- Info page with basic about me bio. (#19)

## [0.2.0] - 2021-06-08

### Added

- `Header` component with mobile navigation. (#12)
- `Footer` component with a link to the [GitHub repo](https://github.com/imse-ty/imsety.com). (#12)
- Work page with portfolio grid of my work. (#11)
- [Sanity.io](https://www.sanity.io/) CMS with basic content functionality.
- Default [container padding](https://tailwindcss.com/docs/container).

### Changed

- Made the site wide page language English. (#14)

## [0.1.2] - 2021-05-06

### Added

- Link to my email. (#9)

### Changed

- Adjusted margin in the hero section.

## [0.1.1] - 2021-04-28

### Fixed

- Incorrect casing in `index.js` for `Header`. (#5)
- Incorrect syntax in `tailwind.config.js`. (#7)

## [0.1.0] - 2021-04-28

Initial development.

[unreleased]: https://github.com/imse-ty/imsety.com/compare/v1.6.0...HEAD
[1.6.0]: https://github.com/imse-ty/imsety.com/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/imse-ty/imsety.com/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/imse-ty/imsety.com/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/imse-ty/imsety.com/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/imse-ty/imsety.com/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/imse-ty/imsety.com/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/imse-ty/imsety.com/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/imse-ty/imsety.com/compare/v0.6.0...v1.0.0
[0.6.0]: https://github.com/imse-ty/imsety.com/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/imse-ty/imsety.com/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/imse-ty/imsety.com/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/imse-ty/imsety.com/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/imse-ty/imsety.com/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/imse-ty/imsety.com/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/imse-ty/imsety.com/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/imse-ty/imsety.com/releases/tag/v0.1.0
