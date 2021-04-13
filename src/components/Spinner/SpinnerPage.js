import {Animation, InnerOne, InnerTwo,InnerThree, Page} from "./Spinner.styled";

const Spinner = () => {
    return (
        <Page>
            <Animation size={'125px'}>
                <InnerOne/>
                <InnerTwo/>
                <InnerThree/>
            </Animation>
        </Page>
    );
}

export default Spinner;