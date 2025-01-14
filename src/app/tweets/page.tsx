'use client';
import { motion } from 'framer-motion';
import { RoughNotation } from 'react-rough-notation';

const Tweets = () => {
    return (<>
        <div className="min-h-screen flex flex-col">
            <motion.h1
                className="text-6xl md:text-7xl font-bold text-black dark:text-white text-center mb-12 tracking-tight"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className="relative inline-block">
                    <RoughNotation
                        type="highlight"
                        color="#f9b400"
                        show={true}
                        animationDelay={300}
                        animationDuration={2500}
                    >
                        Tweets
                    </RoughNotation>
                </div>
            </motion.h1>
        </div>
    </>)
}
export default Tweets;