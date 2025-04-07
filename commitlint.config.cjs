module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'Feat',
        'Fix',
        'Docs',
        'Style',
        'Rename',
        'Remove',
        'Comment',
        'Refactor',
        'Test',
        'Chore',
        'Build',
        'Move',
      ],
    ],
    'type-case': [0],
  },
};
