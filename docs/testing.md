# Testing

## Table of Contents

- [Navigation](#navigation)
- [Authentication](#authentication)
- [Autotrader](#autotrader)
- [Account](#account)
- [Code Validation](#code-validation)
  - [JSX](#jsx)
  - [CSS](#css)
  - [Lighthouse Scores](#lighthouse-scores)
- [Responsiveness](#responsiveness)

### Navigation

| Test  | Test                                                                                                                                            | Result |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1      | _As a_ user, I can find and access the navigation bar on every page so that I can easily navigate to the different sections of the website. | PASS   |
| 2      | _As a_ user, I can continue scrolling without pagination so that I can find more car ads.                                                   | PASS   |
| 3      | _As a_ user,  can search for keywords in the search bar so that I can easily find the car with the specifications that I am looking for.              | PASS   |

### Account

| Test  | Test                                                                                                    | Result |
| ------ | ------------------------------------------------------------------------------------------------------- | ------ |
| 1      | _As a_ user, I can find a column that shows the top sellers so that I can easily check those first. | PASS   |
| 2      | _As a_ user, I can click on a profile so that I can find more information about the seller.        | PASS   |
| 3      | _As a_ user, I can edit my profile so that I can update or change my information.                 | PASS   |

### Autotrader

| Test  | Test                                                                                                              | Result |
| ------ | ----------------------------------------------------------------------------------------------------------------- | ------ |
| 1      | _As a_ user, _I can_ delete the autotrader ad in order to remove it from being visible to other visitors.                    | PASS   |
| 2      | _As a_ user, _I can_ edit the autotrader ad ad to update the information.                                  | PASS   |
| 3      | _As a_ user, _I can_ create an ad for my car, allowing others to view it and make inquiries to buy my car.    | PASS   |
| 4      | _As a_ user, _I can_ find all the autotraders on the main page to search for autotraders that may be of interest to me. | PASS   |
| 5      | _As a_ user,I can click on an autotrader to view more details about the car.                              | PASS   |

### Authentication

| Test | Test                                                                                                               | Result |
| ------ | ------------------------------------------------------------------------------------------------------------------ | ------ |
| 1      | _As a_ user, _I can_ register an account, which grants me access to all the site features and enables me to create an autotrader sales ad.   | PASS   |
| 2      | _As a_ user, _I can_ login to my account, allowing me to utilize the site's features and access my profile.            | PASS   |
| 3      | _As a_ user, _I can_ logout _in order_ to keep my account secure.                                                 | PASS   |
| 4      | _As an_ admin, _I can_ configure the access tokens to refresh, preventing users from being automatically logged out too frequently. | PASS   |

## Code Validation

### JSX

The JSX code underwent thorough validation and continuous refinement throughout the development process, ensuring its impeccable quality as the project advanced.

### CSS

+ [W3C Markup Validator](https://validator.w3.org/)
  + No errors or warnings that are relevant was shown<br>

  ![image](./img/validator/html-index.png)

<br>

+ [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
  + No errors or warnings that are relevant was shown<br>
![image](./img/validator/css-home.png)

<br>


### Lighthouse Scores

The Lighthouse Scores showed an overall high performance in terms of accessibility, best practices, and SEO for both desktop and mobile devices. However, the site's loading times were affected by the presence of large image sizes, resulting in slower performance in the performance metrics. To address this issue in future updates, I will explore the potential of utilizing Cloudinary to automatically resize the images upon upload, thereby improving the site's loading speed.

- Main Page Desktop

![Lighthouse Desktop](docs/assets/testing/lighthouse_desktop.png)

- Main Page Mobile

![Lighthouse Mobile](docs/assets/testing/lighthouse_mobile.png)

### Responsiveness

The website was thoroughly tested using the [responsivetesttool.](https://responsivetesttool.com/)

Return to [README.md](https://github.com/SuzanDewitz/autotraderss-react-frontend/blob/main/README.md)





[Return to README.md](../README.md)
<br>
<br>


[Back to top](#top)
