import { PrismaClothingRepository } from "./repositories/implemetations/clothing.repositories"; // Alterei para refletir roupas
import { NovoClothing } from "./controle/novoClothing.controle"; // Alterei para refletir roupas
import { NewClothing } from "./acao/novoClothing.acao"; // Alterei para refletir roupas
import { InicialClothing } from "./controle/inicialClothing.controle"; // Alterei para refletir roupas
import { InicialClothingAcao } from "./acao/inicialClothing.acao"; // Alterei para refletir roupas
import { PesquisaClothing } from "./controle/pesquiClothing.controle"; // Alterei para refletir roupas
import { PesquisaClothingAcao } from "./acao/pesquiClothing.acao"; // Alterei para refletir roupas
import { DeletarClothing } from "./controle/deletarClothing.controle"; // Alterei para refletir roupas
import { DeletarClothingAcao } from "./acao/deletarClothing.acao"; // Alterei para refletir roupas
import { EditarClothing } from "./controle/editClothing.controle"; // Alterei para refletir roupas
import { EditarClothingAcao } from "./acao/editClothing.acao"; // Alterei para refletir roupas

const repository = new PrismaClothingRepository();

const createService = new NewClothing(repository);
const newClothingControl = new NovoClothing(createService);

const findOneService = new InicialClothingAcao(repository);
const inicialClothingControl = new InicialClothing(findOneService);

const findService = new PesquisaClothingAcao(repository);
const pesquiClothingControl = new PesquisaClothing(findService);

const removeService = new DeletarClothingAcao(repository);
const deletarClothing = new DeletarClothing(removeService);

const updateService = new EditarClothingAcao(repository);
const editClothing = new EditarClothing(updateService);

export {
    newClothingControl,
    inicialClothingControl,
    pesquiClothingControl,
    deletarClothing,
    editClothing
};
