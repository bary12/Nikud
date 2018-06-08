import * as fs from 'fs';
import * as _ from 'lodash';
import { operators } from './src';

fs.writeFileSync('README.md',
  fs.readFileSync('README.template.md')
    .toString()
    .replace('{{{OPERATIONS}}}',
      _(operators)
        .toPairs()
        .map(([niqqud, {description}]) => `### א${niqqud}\n${description}\n`)
        .join('\n'),
  ),
);
