export interface ModalCreateProps {
  closeModal: () => void;
  id?: string;
  fetchTrilhas?: () => void;
  fetchModule?: () => void;
  updateModule?: () => void;
  profile?: any;
}
