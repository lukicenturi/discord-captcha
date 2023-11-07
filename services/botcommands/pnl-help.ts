import { type API, type APIInteraction } from '@discordjs/core';

export const pnlHelp = {
  data: {
    name: 'pnlhelp',
    description:
      'Links to the documentation for the PnL report is you have any issue.',
  },
  async execute(interaction: APIInteraction, api: API) {
    await api.interactions.reply(interaction.id, interaction.token, {
      content:
        'You can find information about common issues with PnL report at https://rotki.readthedocs.io/en/stable/usage_guide.html#pnl-report-creation-problems',
    });
  },
};
