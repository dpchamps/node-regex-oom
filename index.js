const TOTAL_KEYWORDS_TO_TEST = 150

const input = `Lorem ipsum dolor sit amet. Eum odio voluptatem sed totam suscipit non maiores similique hic dolorem nobis quo aspernatur nostrum et doloremque voluptatum et impedit quia! Et laboriosam internos est enim magnam est numquam itaque et molestiae provident vel quia iste est magni nisi. Sed dolorum velit ut consectetur quaerat in aliquam earum eum quia nihil aut dicta earum cum odit repellendus et doloremque assumenda? Ut molestiae aliquam aut saepe labore ex unde dolorum non facere laudantium ut fugit delectus eum dignissimos soluta. Vel facere asperiores et error aspernatur non aspernatur molestiae ea aliquam quos At similique obcaecati. Est exercitationem error ea tempora enim ut ipsa officiis quo repudiandae animi aut voluptate galisum. Et nisi maxime cum harum perferendis sed natus distinctio id odit libero ut architecto alias eos quae dolore. Eum amet corporis 33 dolor pariatur sit tempora eius sed odit beatae aut praesentium laudantium. Et recusandae temporibus et impedit vero qui modi cumque sit numquam rerum hic facilis quam et alias illo qui quia commodi. Sit accusantium cum velit illo qui sunt deserunt nihil eligendi non pariatur neque aut voluptatum quam ea dolor similique! Sed ipsum doloribus ab quia nihil enim aliquam a enim quam. Quo quia omnis aut deserunt ut voluptas quia sit error earum hic sequi saepe cum animi magnam. Qui culpa voluptatibus nam internos voluptatem id nulla voluptatem vel ducimus enim est fugiat nisi. A quibusdam officiis sit fuga repellendus At sint tempora qui quas harum in quia impedit. Qui impedit adipisci sapiente aliquam rem quia molestiae eum expedita voluptatem ut omnis quam qui illo sint. Est enim cupiditate rem ipsum harum aut molestias quibusdam eum sequi amet ea delectus ipsum. Eos animi laudantium id molestiae nemo qui dolor alias et animi doloremque ea cumque saepe sit necessitatibus rerum. Aut ducimus voluptatem a voluptatum molestiae et aspernatur facere rem numquam quibusdam qui nihil similique in consectetur expedita rem ratione neque. In molestiae consequatur sit temporibus autem ut doloribus iusto in omnis fugit. Aut quos ullam ea nobis autem cum tenetur voluptas aut excepturi vero vel quae voluptatibus qui enim quidem. Ut error similique est modi iusto qui velit voluptatem et velit dolorem non galisum dolores.`;

const permuteStringInput = (input) => input.split(/\s/).map((el, i, a) => a.slice(i, i+3).join(" "))

const constructLargeUnicodeDigitAndLetterRegex = (inputs) => inputs.map(input => 
    new RegExp(
        input.replace(/[\p{L}\p{N}]/giu, (char) => `${char}{${1},}[^\\p{L}\\p{N}]{0,}`),
        "ui"
    )
);

const wordsToMatch = [ 
    "u",
    "\u0100", // Note: This needs to be greater than \u0100
]

const keywords = constructLargeUnicodeDigitAndLetterRegex(permuteStringInput(input));

for(const word of wordsToMatch){
    for(const keyword of keywords.slice(0, TOTAL_KEYWORDS_TO_TEST+1)){
        word.match(keyword)
    }
}

