import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
    title: ReactNode;
    subtitle: ReactNode;
}
const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export const Hero: FC<Props> = ({ title, subtitle }) => (
    <header className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <motion.h1
            className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-3 sm:mb-4 max-w-4xl mx-auto"
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ duration: .5 }}
        >
            {title}
        </motion.h1>

        {subtitle && (
            <motion.p
                className="mx-auto max-w-2xl text-center text-muted-foreground text-sm sm:text-base px-4 sm:px-0"
                variants={fade}
                initial="hidden"
                animate="show"
                transition={{ duration: .5, delay: .05 }}
            >
                {subtitle}
            </motion.p>
        )}
    </header>
);
export default Hero; 