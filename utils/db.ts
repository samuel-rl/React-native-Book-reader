import {ImageURISource} from 'react-native';

export interface Story {
  id: number;
  cover: ImageURISource;
  story: String;
}

export interface Font {
  name: String;
  use: String;
}

export interface Color {
  color: String;
}

const storys: Story[] = [
  {
    id: 0,
    cover: require('../images/cover1.png'),
    story:
      'Conversation with Ruskin Bond \nA Special Tree \n\nOne day, when Rakesh was six, he walked home from the Mussoorie bazaar eating cherries. They were a little sweet, a little sour; small, bright red cherries, which had come all the way from the Kashmir Valley. \n\nHere in the Himalayan foothills where Rakesh lived, there were not many fruit trees. The soil was stony, and the dry cold winds stunted the growth of most plants. But on the more sheltered slopes there were forests of oak and deodar.\n\nRakesh lived with his grandfather on the outskirts of Mussoorie, just where the forest began. His father and mother lived in a small village fifty miles away, where they grew maize and rice and barley in narrow terraced fields on the lower slopes of the mountain. But there were no schools in the village, and Rakesh’s parents were keen that he should go to school. As soon as he was of school-going age, they sent him to stay with his grandfather in Mussoorie. He had a little cottage outside the town.\n\n‘What can I do with a seed?’',
  },
  {
    id: 1,
    cover: require('../images/cover1.png'),
    story:
      'Conversation with Ruskin Bond \nA Special Tree \n\nOne day, when Rakesh was six, he walked home from the Mussoorie bazaar eating cherries. They were a little sweet, a little sour; small, bright red cherries, which had come all the way from the Kashmir Valley. \n\nHere in the Himalayan foothills where Rakesh lived, there were not many fruit trees. The soil was stony, and the dry cold winds stunted the growth of most plants. But on the more sheltered slopes there were forests of oak and deodar.\n\nRakesh lived with his grandfather on the outskirts of Mussoorie, just where the forest began. His father and mother lived in a small village fifty miles away, where they grew maize and rice and barley in narrow terraced fields on the lower slopes of the mountain. But there were no schools in the village, and Rakesh’s parents were keen that he should go to school. As soon as he was of school-going age, they sent him to stay with his grandfather in Mussoorie. He had a little cottage outside the town.\n\n‘What can I do with a seed?’',
  },
  {
    id: 2,
    cover: require('../images/cover1.png'),
    story:
      'Conversation with Ruskin Bond \nA Special Tree \n\nOne day, when Rakesh was six, he walked home from the Mussoorie bazaar eating cherries. They were a little sweet, a little sour; small, bright red cherries, which had come all the way from the Kashmir Valley. \n\nHere in the Himalayan foothills where Rakesh lived, there were not many fruit trees. The soil was stony, and the dry cold winds stunted the growth of most plants. But on the more sheltered slopes there were forests of oak and deodar.\n\nRakesh lived with his grandfather on the outskirts of Mussoorie, just where the forest began. His father and mother lived in a small village fifty miles away, where they grew maize and rice and barley in narrow terraced fields on the lower slopes of the mountain. But there were no schools in the village, and Rakesh’s parents were keen that he should go to school. As soon as he was of school-going age, they sent him to stay with his grandfather in Mussoorie. He had a little cottage outside the town.\n\n‘What can I do with a seed?’',
  },
  {
    id: 3,
    cover: require('../images/cover1.png'),
    story:
      'Conversation with Ruskin Bond \nA Special Tree \n\nOne day, when Rakesh was six, he walked home from the Mussoorie bazaar eating cherries. They were a little sweet, a little sour; small, bright red cherries, which had come all the way from the Kashmir Valley. \n\nHere in the Himalayan foothills where Rakesh lived, there were not many fruit trees. The soil was stony, and the dry cold winds stunted the growth of most plants. But on the more sheltered slopes there were forests of oak and deodar.\n\nRakesh lived with his grandfather on the outskirts of Mussoorie, just where the forest began. His father and mother lived in a small village fifty miles away, where they grew maize and rice and barley in narrow terraced fields on the lower slopes of the mountain. But there were no schools in the village, and Rakesh’s parents were keen that he should go to school. As soon as he was of school-going age, they sent him to stay with his grandfather in Mussoorie. He had a little cottage outside the town.\n\n‘What can I do with a seed?’',
  },
  {
    id: 4,
    cover: require('../images/cover1.png'),
    story:
      'Conversation with Ruskin Bond \nA Special Tree \n\nOne day, when Rakesh was six, he walked home from the Mussoorie bazaar eating cherries. They were a little sweet, a little sour; small, bright red cherries, which had come all the way from the Kashmir Valley. \n\nHere in the Himalayan foothills where Rakesh lived, there were not many fruit trees. The soil was stony, and the dry cold winds stunted the growth of most plants. But on the more sheltered slopes there were forests of oak and deodar.\n\nRakesh lived with his grandfather on the outskirts of Mussoorie, just where the forest began. His father and mother lived in a small village fifty miles away, where they grew maize and rice and barley in narrow terraced fields on the lower slopes of the mountain. But there were no schools in the village, and Rakesh’s parents were keen that he should go to school. As soon as he was of school-going age, they sent him to stay with his grandfather in Mussoorie. He had a little cottage outside the town.\n\n‘What can I do with a seed?’',
  },
];

const fonts: Font[] = [
  {
    name: 'Avenir',
    use: 'AvenirHeavy',
  },
  {
    name: 'Helvetica',
    use: 'Helvetica',
  },
  {
    name: 'Playfair Display',
    use: 'PlayfairDisplay-Regular',
  },
  {
    name: 'Proxima Nova',
    use: 'Proxima',
  },
];

const colors: Color[] = [
  {
    color: '#5443AF',
  },
  {
    color: '#393232',
  },
  {
    color: '#1EAD50',
  },
  {
    color: '#E88613',
  },
  {
    color: '#1E69E2',
  },
  {
    color: '#C334D6',
  },
  {
    color: '#8B2DEA',
  },
  {
    color: '#EDCC14',
  },
];

export {storys, fonts, colors};
