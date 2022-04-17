import { Button, Spacer, HStack } from "@chakra-ui/react"
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons"

const NavigationButtons = ({prev, prevDisabled, next, nextDisabled}) => {

    const makePrevButton = () => {
        return (
            <Button 
                colorScheme='messenger' 
                leftIcon={<ArrowBackIcon/>} 
                disabled={prevDisabled} 
                onClick={prev}>
            Back
            </Button>
        )
    }

    const makeNextButton = () => {
        return (
            <Button 
                colorScheme='messenger' 
                rightIcon={<ArrowForwardIcon/>} 
                disabled={nextDisabled} 
                onClick={next}>
            Next
            </Button>
        )
    }

    return (
        <HStack w='100%'>
            {prev === null ? <Spacer/> : makePrevButton()}
            <Spacer/>
            {next === null ? <Spacer/> : makeNextButton()}
        </HStack>
    )
}
export default NavigationButtons