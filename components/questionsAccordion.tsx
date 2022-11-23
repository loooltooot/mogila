import QuestionCard from "./questionCard";

export default function QuestionsAccordion() {
    return (
        <div id="questionsAccordion">
            <QuestionCard 
                title="Вопрос 1"
                content="Dolor ipsum officia proident commodo dolor aute aliquip deserunt. Commodo reprehenderit amet est culpa eiusmod. Ad aute reprehenderit eu sunt et proident ad nulla est sit et consequat aliquip." 
                id="q1"    
            />
            <QuestionCard 
                title="Вопрос 2"
                content="Eiusmod exercitation velit ullamco pariatur. Dolor cillum laborum sunt irure ipsum voluptate ullamco quis velit et ea consectetur cillum laborum. Ad reprehenderit eiusmod ullamco dolore occaecat elit non consectetur qui irure in. Cupidatat exercitation commodo elit qui enim enim exercitation officia et adipisicing ut id do." 
                id="q2" 
                show   
            />
            <QuestionCard 
                title="Вопрос 3"
                content="Aliquip minim reprehenderit do labore Lorem do exercitation aliqua culpa non nisi aliquip. Ullamco voluptate qui do aliqua consectetur irure qui voluptate laborum pariatur qui excepteur. Non quis non culpa velit enim deserunt aute sit pariatur labore aliqua irure qui. Dolor magna ut irure commodo minim amet ex culpa qui. Veniam sint velit exercitation Lorem ipsum. Dolore consectetur labore mollit cupidatat ea voluptate et reprehenderit voluptate eu. Eu velit aliqua est id." 
                id="q3"    
            />
            <QuestionCard 
                title="Вопрос 4"
                content="Ex et ad laborum minim laboris ea aute nostrud adipisicing minim anim aliquip aliquip. Elit non cillum ipsum consequat dolor. Duis pariatur fugiat ipsum laboris. Fugiat ad officia consectetur elit in reprehenderit nisi sint ipsum tempor veniam veniam cillum. Magna consequat est dolor amet elit incididunt fugiat. Occaecat officia magna exercitation commodo veniam nulla sit Lorem." 
                id="q4"    
            />
        </div>
    )
}