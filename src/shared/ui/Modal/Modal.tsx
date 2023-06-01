import { useTheme } from 'app/providers/ThemeProvider';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import Portal from '../Portal/Portal';
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onCLose?: () => void;
}

const ANIMATION_DELAY = 300;


const Modal = (props: ModalProps) => {

	const {className, children, isOpen, onCLose} = props;
  const {theme} = useTheme()
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
    [cls[theme]]: true
  };
	
	const CloseHandler = useCallback(() => {
		if(onCLose){
			setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onCLose();
        setIsClosing(false)
      }, ANIMATION_DELAY);
		}
	}, [onCLose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if(e.key ==='Escape'){
      CloseHandler()
    }
  }, [CloseHandler])

  useEffect(() => {
    if(isOpen){
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(timerRef.current);
    }
  }, [isOpen, onKeyDown])

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div
          className={classNames(cls.overlay, {}, [className])}
          onClick={CloseHandler}
        >
          <div
            className={classNames(cls.content, {}, [className])}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
 
export default Modal;