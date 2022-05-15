import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `                                                  
  ███████████                                sumfetch: summary display
 ░░███░░░░░███                             ------------
  ░███    ░███                               ABOUT
  ░██████████                                ${config.name}
  ░███░░░░░░                                ﰩ ${config.ps1_hostname}
  ░███                                      爵 <u><a href="${config.repo}" target="_blank">Github</a></u>
  █████                                     爵 <u><a href="${config.blog}" target="_blank">Blog</a></u>
 ░░░░░                                      爵 <u><a href="${config.social.discord.server}" target="_blank">Discord Server</a></u>
                          ███████████       -----------
                         ░░███░░░░░███       CONTACT 
                          ░███    ░███       <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                          ░██████████        <u><a href="https://discord.com/users/${config.social.discord.id}" target="_blank">${config.social.discord.tag}</a></u>
                          ░███░░░░░███      -----------
                          ░███    ░███       PROJECTS 
                          ███████████       - <u><a href="${config.projects.first.link}" target="_blank">${config.projects.first.name}</a></u>
                         ░░░░░░░░░░░        - <u><a href="${config.projects.second.link}" target="_blank">${config.projects.second.name}</a></u>

`;
};

export default sumfetch;
