
https://asl.stedi.com/?share=eJxlUv1v2jAU_F9QftiUEPGgXdtIk0YpXSmlY4XBPhQmB1waLR8ocTa63f73PRObISoRi7t3Pt979kSJQnUVBlmsYpHEv6U7E0WJiRJKli_o6fNGYizKEg-yrBI1FuoJDjOFSKWSrPjJMt-B4_j9rVxWKs4zf5BtKoV7uVXolmW8ztysSiOtPoKOv9tuYX0GenmaykzB0O5b91vLc8lz257bCa1HIpU6sLTQWFooEGGJFQzWXg3R8NxGpJelXlaNvec6ySORHCHjaNCmkI_xFjViu0ZNNDASm--kV96QiFKZZgZ8rFB5YU2XeRrFmVy9wOaYPa6716M9HJJp5D9dY5OHabufo_0xc_bMcDzTkfsXU1H-0OPOq2IpIYosEL_KIBFptBJBVTYlN9CkgNqd_S94rLKlvt4gfW5uinzNT6C5yic5P4SnOFtjd-u7B3LAvrJ5XqOfrfQ00nKn0eH1q-GB-Zr1ZyKppL0nbsTcvu8sWiC00VksnPqf04FzglO8wRnO4VygG-ISvRBXlu_jGu_oFjQE3YFGId7jhjWDELdWM9SaO4xwjw-6Pub6xxAPtj7h-pT5T8zPQsw0P2f-M76Ag8x1kPkR-VWT1LIWRDoftUEd0AnoFMS--jA6Y1c6D_nTYl7pAtQFXepNXO-BrtCkMGRJn7Nqn2v-WMvV2lFnpBsMteZA3N-L2zuxlYEG6B9o_wFq_3WX
import * as asl from "@cloudscript/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
    const numbers = asl.pass({
        parameters: () => [0, 1, 2, 3],
        comment: "numbers = [0, 1, 2, 3]"
    });
    const letters = asl.pass({
        parameters: () => ["a", "b", "c", "d"],
        comment: "letters = [\"a\", \"b\", \"c\", \"d\"]"
    });
    const global = asl.pass({
        parameters: () => "prefix",
        comment: "global = \"prefix\""
    });
    asl.map({
        items: () => numbers,
        iterator: number => {
            asl.map({
                items: () => letters,
                iterator: letter => {
                    const combined = asl.pass({
                        parameters: () => ({ number, letter, global }),
                        comment: "combined = { number, letter, global }"
                    });
                    asl.typescriptInvoke({
                        target: doSomething,
                        parameters: () => combined,
                        comment: "doSomething(combined)"
                    });
                }
            })
        }
    })
});


export const doSomething = asl.deploy.asLambda(x => { })
