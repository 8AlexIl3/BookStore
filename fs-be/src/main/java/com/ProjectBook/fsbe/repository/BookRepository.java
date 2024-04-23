package com.ProjectBook.fsbe.repository;

import com.ProjectBook.fsbe.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository <Book,Long>{

}
