package com.ProjectBook.fsbe.contoller;

import com.ProjectBook.fsbe.exception.BookNotFoundException;
import com.ProjectBook.fsbe.model.Book;
import com.ProjectBook.fsbe.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("http://localhost:3000")
public class BookController {
    @Autowired
    private BookRepository bookRepository;
    @PostMapping("/book")
    Book newBook(@RequestBody Book newBook){
        return bookRepository.save(newBook);
    }
    @GetMapping("/books")
    List<Book>getAllBooks(){
        return bookRepository.findAll();
    }

    @GetMapping("/book/{id}")
    Book getBookById(@PathVariable Long id){
        return bookRepository.findById(id).orElseThrow(()->new BookNotFoundException(id));
    }
    @PutMapping("/book/{id}")
    Book updateBook(@RequestBody Book newBook,@PathVariable Long id){
        return bookRepository.findById(id)
                .map(book->{book.setTitle(newBook.getTitle());
                    book.setAuthor(newBook.getAuthor());
                    book.setPrice(newBook.getPrice());
                    book.setGenre(newBook.getGenre());
                    book.setYearPub(newBook.getYearPub());
                    return bookRepository.save(book);
                }).orElseThrow(()->new BookNotFoundException(id));
    }
    @DeleteMapping("/book/{id}")
    String deleteBook(@PathVariable Long id){
        if(!bookRepository.existsById(id)){
            throw new BookNotFoundException(id);
        }
        bookRepository.deleteById(id);
        return "Book with id"+ id+ "has been deleted";
    }
}
