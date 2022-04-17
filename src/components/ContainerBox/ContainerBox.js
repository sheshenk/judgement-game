import NavigationButtons from "../NavigationButtons/NavigationButtons"
import { Box, VStack } from "@chakra-ui/react"

const ContainerBox = ({children, prev, prevDisabled, next, nextDisabled}) => {
    return (
        <VStack w='50%' minW='380px' spacing={4}>
            <Box w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden' p={12} >
                <VStack spacing={6} w='100%'>
                    {children}
                </VStack>
            </Box>
            <NavigationButtons 
                prev={prev}
                prevDisabled={prevDisabled}
                next={next}
                nextDisabled={nextDisabled}
            />
        </VStack>
    )
}
export default ContainerBox